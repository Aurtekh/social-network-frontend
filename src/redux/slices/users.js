import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSearchUsers = createAsyncThunk('posts/fetchSearchUsers', async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
});

const initialState = {
  users: {
    items: [],
    status: 'loading',
  },
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {
    clearUsers: (state) => {
      state.users.items = [];
    },
  },
  extraReducers: (builder) => {
    // Получение статей
    builder.addCase(fetchSearchUsers.pending, (state) => {
      state.users.status = 'loading';
      state.users.items = [];
    });
    builder.addCase(fetchSearchUsers.fulfilled, (state, action) => {
      state.users.status = 'success';
      state.users.items = action.payload;
    });
    builder.addCase(fetchSearchUsers.rejected, (state) => {
      state.users.status = 'error';
      state.users.items = [];
    });
  },
});

export const userReducer = userSlice.reducer;

export const { clearUsers } = userSlice.actions;
