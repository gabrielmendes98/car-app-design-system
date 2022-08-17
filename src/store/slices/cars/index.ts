import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'store';
import carsService from 'api/services/cars';
import { Car } from 'common/types/car';

export interface CarsState {
  status: 'idle' | 'loading' | 'failed';
}

const carsAdapter = createEntityAdapter<Car>();

const initialState = carsAdapter.getInitialState<CarsState>({
  status: 'idle',
});

export const listFirstCars = createAsyncThunk(
  'cars/listFirstCars',
  async () => await carsService.list(),
);

export const listMoreCars = createAsyncThunk(
  'cars/listMoreCars',
  async (_, { getState }) => {
    const state = getState() as RootState;

    if (state.cars.ids.length) {
      const lastCarId = state.cars.ids.at(-1);
      return await carsService.infiniteScroll(Number(lastCarId));
    }

    return [];
  },
);

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Omit<Car, 'id' | 'imageAlt'>>) => {
      const car = action.payload;
      const nextId = (Number(state.ids.at(-1)) || 0) + 1;

      const imageAlt = `${action.payload.name} ${action.payload.year}`; // para melhorar SEO e acessibilidade

      carsAdapter.addOne(state, {
        ...car,
        imageAlt,
        id: nextId,
      });
    },
    updateCar: carsAdapter.updateOne,
    deleteCar: carsAdapter.removeOne,
  },
  extraReducers: builder => {
    builder
      .addCase(listFirstCars.pending, state => {
        state.status = 'loading';
      })
      .addCase(listFirstCars.fulfilled, (state, action) => {
        state.status = 'idle';
        carsAdapter.upsertMany(state, action.payload);
      })
      .addCase(listFirstCars.rejected, state => {
        state.status = 'failed';
      })
      .addCase(listMoreCars.pending, state => {
        state.status = 'loading';
      })
      .addCase(listMoreCars.fulfilled, (state, action) => {
        state.status = 'idle';
        carsAdapter.upsertMany(state, action.payload);
      })
      .addCase(listMoreCars.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { addCar, updateCar, deleteCar } = carsSlice.actions;

export const { selectAll: selectAllCars, selectById: selectCarById } =
  carsAdapter.getSelectors<RootState>(state => state.cars);

export default carsSlice.reducer;
