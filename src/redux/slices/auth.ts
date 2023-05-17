import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';

export const fetchAuth = createAsyncThunk<UserData, fetchAuthArgs>(
  'auth/fetchAuth',
  async (params) => {
    const { data } = await axios.post<UserData>('/auth/login', params);
    return data;
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get<UserData>('/auth/me');
  return data;
});

type fetchAuthArgs = {
  email: string;
  password: string;
};

type fetchRegisterArgs = {
  email: string;
  password: string;
  fullName: string;
};

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params: fetchRegisterArgs) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
  },
);

export type UserData = {
  _id: string;
  fullName: string;
  email: string;
  friends: [string];
  status: string;
  birthday: string;
  city: string;
  avatarUrl: string;
  language: string;
  university: string;
  createdAt: string;
  updatedAt: string;
  token?: string;
};

interface AuthSliceState {
  data: UserData | null;
  status: string;
}

const initialState: AuthSliceState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    //Запрос на авторизацию
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
    //Инфо обо мне
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });

    //Регистрация
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.status = 'success';
      state.data = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
