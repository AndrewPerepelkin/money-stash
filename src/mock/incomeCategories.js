import {faker} from '@faker-js/faker/locale/ru';

export const incomeCategories = {
  work: {
    id: faker.database.mongodbObjectId(),
    name: 'Работа'
  },
  dividends: {
    id: faker.database.mongodbObjectId(),
    name: 'Дивиденды'
  }
};
