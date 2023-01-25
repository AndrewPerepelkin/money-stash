import {faker} from '@faker-js/faker/locale/ru';
import {accounts} from './accounts';
import {expensesCategories} from './expensesCategories';

export const expenses = [
  {
    name: 'Кофе',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(100, 300, 2),
    category: expensesCategories.cafe,
    account: accounts.cash
  },
  {
    name: 'Продукты',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(1000, 3000, 2),
    category: expensesCategories.food,
    account: accounts.card
  },
  {
    name: 'Такси',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(300, 1000, 2),
    category: expensesCategories.taxi,
    account: accounts.card
  },
  {
    name: 'Ноутбук',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(40000, 60000, 2),
    category: expensesCategories.technics,
    account: accounts.card
  },
  {
    name: 'Стол',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(5000, 9000, 2),
    category: expensesCategories.home,
    account: accounts.card
  },
  {
    name: 'ЖКХ',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(5000, 7000, 2),
    category: expensesCategories.housing,
    account: accounts.cash
  },
  {
    name: 'Корм для котика',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(500, 1000, 2),
    category: expensesCategories.pets,
    account: accounts.card
  },
  {
    name: 'Цветы',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(2000, 3000, 2),
    category: expensesCategories.gifts,
    account: accounts.card
  }
];
