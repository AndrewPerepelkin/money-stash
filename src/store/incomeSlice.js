import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import incomeService from '../services/income.service';
import {setMessage} from './messageSlice';

export const getIncome = createAsyncThunk('income/get', async (_, thunkAPI) => {
  try {
    const response = await incomeService.get();
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const incomeAdapter = createEntityAdapter({
  selectId: (income) => income.id,
  sortComparer: (a, b) => {
    const date_a = Date.parse(a.attributes['created-at']);
    const date_b = Date.parse(b.attributes['created-at']);

    if (date_a > date_b) return -1;
    if (date_b < date_a) return 1;
    return 0;
  }
});
const incomeSlice = createSlice({
  name: 'income',
  initialState: incomeAdapter.getInitialState({
    loading: 'idle'
  }),

  extraReducers: {
    [getIncome.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      incomeAdapter.upsertMany(state, action.payload.data);
    },
    [getIncome.rejected]: (state) => {
      state.loading = 'failed';
    },
    [getIncome.pending]: (state) => {
      state.loading = 'pending';
    }
  }
});
const {reducer: incomeReducer, name} = incomeSlice;

// Selectors
const incomeSelectors = incomeAdapter.getSelectors((state) => state[name]);

export const loadingStatusSelector = () => (state) => state[name].loading;
export const incomeListSelector = () => (state) =>
  incomeSelectors.selectAll(state);
export const incomeSelector = (id) => (state) =>
  incomeSelectors.selectById(state, id);

export default incomeReducer;
