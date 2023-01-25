import {
  createServer,
  Model,
  belongsTo,
  JSONAPISerializer,
  Response
  //   Factory
} from 'miragejs';
import {nanoid} from 'nanoid';
import {accounts} from './accounts';
// import {faker} from '@faker-js/faker/locale/ru';
import {income} from './income';
import {incomeCategories} from './incomeCategories';
import {expensesCategories} from './expensesCategories';
import {expenses} from './expenses';
function getAvatar() {
  return `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
    .toString(36)
    .substring(7)}.svg`;
}
const dataBaseDump = localStorage.getItem('dbDump');
const incorrectPassOrEmailRequest = () => {
  return new Response(
    400,
    {},
    {
      message: 'Incorrect email or password'
    }
  );
};
const generateAccessToken = (userId) => {
  return `${nanoid(10)}.userId-${userId}.accessToken`;
};

export function makeServer({environment = 'development'}) {
  return createServer({
    environment,

    models: {
      users: Model.extend(),
      tokens: Model.extend({
        user: belongsTo('users')
      }),
      accounts: Model.extend(),
      income: Model.extend(),
      incomeCategories: Model.extend(),
      expenses: Model.extend(),
      expensesCategories: Model.extend()
    },

    serializers: {
      application: JSONAPISerializer
    },

    seeds(server) {
      if (!dataBaseDump) {
        Object.keys(accounts).forEach((item) => {
          server.create('account', accounts[item]);
        });
        income.forEach((item) => {
          server.create('income', item);
        });
        Object.keys(incomeCategories).forEach((item) => {
          server.create('incomeCategory', incomeCategories[item]);
        });
        expenses.forEach((item) => {
          server.create('expense', item);
        });
        Object.keys(expensesCategories).forEach((item) => {
          server.create('expensesCategory', expensesCategories[item]);
        });
      }
    },

    routes() {
      if (environment === 'development') {
        this.pretender.handledRequest = () => {
          const dump = this.db.dump();
          localStorage.setItem('dbDump', JSON.stringify(dump));
        };
        if (dataBaseDump) this.db.loadData(JSON.parse(dataBaseDump));
      }
      this.timing = 1500;
      this.namespace = 'api';
      // Posts Fake Api
      // this.resource('posts');

      this.resource('income', {path: '/income'});
      // this.resource('expenses');
      // this.get('/income', 'income');
      // this.resource('income');

      // LogIn Fake
      this.post('/auth/login', (schema, request) => {
        // Parse body
        const attr = JSON.parse(request.requestBody);

        // Check user exist in database
        const user = schema.users.where({username: attr.username}).models[0];
        if (!user) return incorrectPassOrEmailRequest();

        // Compare password data
        const isPassEquals = user.password === attr.password;
        if (!isPassEquals) return incorrectPassOrEmailRequest();
        // Genegate new tokens
        const accessToken = generateAccessToken(user.attrs.id);

        // Save Token to database
        schema.tokens.create({
          user,
          accessToken
        });

        // Send Response
        return {accessToken, user: {...user.attrs}};
      });

      // Sign Up Fake
      this.post('/auth/signup', (schema, request) => {
        // Parse body
        const attr = JSON.parse(request.requestBody);

        // Check user exist in database
        const isUserExist =
          schema.users.where({email: attr.email}).models.length > 0;

        // Send Error if exist
        if (isUserExist) {
          return new Response(
            400,
            {},
            {
              message: 'User with given email already exist'
            }
          );
        }
        // Create new user in database
        const user = schema.users.create({
          ...attr,
          avatar: getAvatar()
        });

        const {
          attrs: {id: userId}
        } = user;

        // Generate fake token
        const accessToken = generateAccessToken(userId);

        schema.tokens.create({
          user,
          accessToken
        });
        // Send Tokens and UserId
        return {accessToken, user: {...user.attrs}};
      });
      this.get('/auth/signup');
    }
  });
}
