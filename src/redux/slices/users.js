import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSearchUsers = createAsyncThunk('users/fetchSearchUsers', async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
  const { data } = await axios.get(`/user/${id}`);
  return data;
});

export const fetchUserFriends = createAsyncThunk('users/fetchUserFriends', async (id) => {
  const { data } = await axios.get(`/friends/${id}`);
  return data;
});

export const fetchUserAddFriends = createAsyncThunk('users/fetchUserAddFriends', async (id) => {
  const { data } = await axios.get(`/friends/add/${id}`);
  return data;
});

export const fetchUserDeleteFriends = createAsyncThunk(
  'users/fetchUserDeleteFriends',
  async (id) => {
    const { data } = await axios.get(`/friends/delete/${id}`);
    return data;
  },
);

const initialState = {
  users: {
    items: [],
    status: 'loading',
  },
  user: {
    items: [],
    status: 'loading',
  },
  userFriends: {
    items: [],
    status: 'loading',
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    // Поиск пользователей
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

    // Переход на страницу пользователя по id
    builder.addCase(fetchUserById.pending, (state) => {
      state.user.status = 'loading';
      state.user.items = [];
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user.status = 'success';
      state.user.items = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.user.status = 'error';
      state.user.items = [];
    });

    // друзья пользователя
    builder.addCase(fetchUserFriends.pending, (state) => {
      state.userFriends.status = 'loading';
      state.userFriends.items = [];
    });
    builder.addCase(fetchUserFriends.fulfilled, (state, action) => {
      state.userFriends.status = 'success';
      state.userFriends.items = action.payload;
    });
    builder.addCase(fetchUserFriends.rejected, (state) => {
      state.userFriends.status = 'error';
      state.userFriends.items = [];
    });
  },
});

export const usersReducer = usersSlice.reducer;
