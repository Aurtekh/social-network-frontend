// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from '../../axios';
// import { UserData } from './auth';

// export const fetchSearchUsers = createAsyncThunk('users/fetchSearchUsers', async (id: string) => {
//   const { data } = await axios.get<UserData[]>(`/users/${id}`);
//   return data;
// });

// export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: string) => {
//   const { data } = await axios.get<UserData>(`/user/${id}`);
//   return data;
// });

// export const fetchUserFriends = createAsyncThunk('users/fetchUserFriends', async (id: string) => {
//   const { data } = await axios.get<UserData[]>(`/friends/${id}`);
//   return data;
// });

// export const fetchUserAddFriends = createAsyncThunk(
//   'users/fetchUserAddFriends',
//   async (id: string) => {
//     const { data } = await axios.get(`/friends/add/${id}`);
//     return data;
//   },
// );

// export const fetchUserDeleteFriends = createAsyncThunk(
//   'users/fetchUserDeleteFriends',
//   async (id: string) => {
//     const { data } = await axios.get(`/friends/delete/${id}`);
//     return data;
//   },
// );

// type Users = {
//   items: UserData[];
//   status: string;
// };

// type User = {
//   items: UserData | null;
//   status: string;
// };

// interface UsersSliceState {
//   users: Users;
//   user: User;
//   userFriends: Users;
// }

// const initialState: UsersSliceState = {
//   users: {
//     items: [],
//     status: 'loading',
//   },
//   user: {
//     items: null,
//     status: 'loading',
//   },
//   userFriends: {
//     items: [],
//     status: 'loading',
//   },
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Поиск пользователей
//     builder.addCase(fetchSearchUsers.pending, (state) => {
//       state.users.status = 'loading';
//       state.users.items = [];
//     });
//     builder.addCase(fetchSearchUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
//       state.users.status = 'success';
//       state.users.items = action.payload;
//     });
//     builder.addCase(fetchSearchUsers.rejected, (state) => {
//       state.users.status = 'error';
//       state.users.items = [];
//     });

//     // Переход на страницу пользователя по id
//     builder.addCase(fetchUserById.pending, (state) => {
//       state.user.status = 'loading';
//       state.user.items = null;
//     });
//     builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<UserData>) => {
//       state.user.status = 'success';
//       state.user.items = action.payload;
//     });
//     builder.addCase(fetchUserById.rejected, (state) => {
//       state.user.status = 'error';
//       state.user.items = null;
//     });

//     // друзья пользователя
//     builder.addCase(fetchUserFriends.pending, (state) => {
//       state.userFriends.status = 'loading';
//       state.userFriends.items = [];
//     });
//     builder.addCase(fetchUserFriends.fulfilled, (state, action: PayloadAction<UserData[]>) => {
//       state.userFriends.status = 'success';
//       state.userFriends.items = action.payload;
//     });
//     builder.addCase(fetchUserFriends.rejected, (state) => {
//       state.userFriends.status = 'error';
//       state.userFriends.items = [];
//     });
//   },
// });

// export const usersReducer = usersSlice.reducer;
