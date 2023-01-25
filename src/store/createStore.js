import authReducer from './authSlice';
import incomeReducer from './incomeSlice';
import messageReducer from './messageSlice';

const {combineReducers, configureStore} = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  income: incomeReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
