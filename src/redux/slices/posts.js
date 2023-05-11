import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchLikePosts = createAsyncThunk('posts/fetchLikePosts', async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    // Получение статей
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.status = 'loading';
      state.posts.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.status = 'success';
      state.posts.items = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.status = 'error';
      state.posts.items = [];
    });
  },
});

export const postsReducer = postSlice.reducer;
