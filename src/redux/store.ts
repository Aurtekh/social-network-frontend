import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import { usersReducer } from './slices/users';
import { useDispatch } from 'react-redux';
import { messagesReducer } from './slices/message';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
