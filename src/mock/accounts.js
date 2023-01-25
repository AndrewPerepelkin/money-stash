import {faker} from '@faker-js/faker/locale/ru';

export const accounts = {
  card: {
    id: faker.database.mongodbObjectId(),
    name: 'Дебетовая карта',
    amount: faker.finance.amount(10000, 100000, 2)
  },
  cash: {
    id: faker.database.mongodbObjectId(),
    name: 'Наличные',
    amount: faker.finance.amount(10000, 20000, 2)
  },
  deposit: {
    id: faker.database.mongodbObjectId(),
    name: 'Вклад',
    amount: faker.finance.amount(100000, 500000, 2)
  }
};
