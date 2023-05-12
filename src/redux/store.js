import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { userReducer } from './slices/users';
const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    users: userReducer,
  },
});

export default store;
