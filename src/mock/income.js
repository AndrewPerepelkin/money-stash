import {faker} from '@faker-js/faker/locale/ru';
import {accounts} from './accounts';
import {incomeCategories} from './incomeCategories';

export const income = [
  {
    name: 'Зарплата',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(70000, 100000, 2),
    category: incomeCategories.work,
    account: accounts.card
  },
  {
    name: 'Проценты по вкладу',
    createdAt: faker.date.betweens(
      '2020-01-01T00:00:00.000Z',
      '2023-01-01T00:00:00.000Z',
      1
    )[0],
    comment: faker.lorem.lines(),
    amount: faker.finance.amount(1000, 3000, 2),
    category: incomeCategories.dividends,
    account: accounts.deposit
  }
];
