import {faker} from '@faker-js/faker/locale/ru';

export const expensesCategories = {
  transport: {
    id: faker.database.mongodbObjectId(),
    name: 'Транспорт'
  },
  studies: {
    id: faker.database.mongodbObjectId(),
    name: 'Учеба'
  },
  technics: {
    id: faker.database.mongodbObjectId(),
    name: 'Техника'
  },
  taxi: {
    id: faker.database.mongodbObjectId(),
    name: 'Такси'
  },
  sport: {
    id: faker.database.mongodbObjectId(),
    name: 'Спорт'
  },
  gifts: {
    id: faker.database.mongodbObjectId(),
    name: 'Подарки'
  },
  pets: {
    id: faker.database.mongodbObjectId(),
    name: 'Питомцы'
  },
  books: {
    id: faker.database.mongodbObjectId(),
    name: 'Книги'
  },
  cafe: {
    id: faker.database.mongodbObjectId(),
    name: 'Кафе'
  },
  food: {
    id: faker.database.mongodbObjectId(),
    name: 'Еда'
  },
  home: {
    id: faker.database.mongodbObjectId(),
    name: 'Дом'
  },
  health: {
    id: faker.database.mongodbObjectId(),
    name: 'Здоровье'
  },
  housing: {
    id: faker.database.mongodbObjectId(),
    name: 'Жилье'
  },
  fun: {
    id: faker.database.mongodbObjectId(),
    name: 'Развлечения'
  }
};
