// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from '../../axios';
// import { UserData } from './auth';

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const { data } = await axios.get<Post[]>('/posts');
//   return data;
// });

// export const fetchLikePosts = createAsyncThunk('posts/fetchLikePosts', async (id: string) => {
//   const { data } = await axios.get<Post>(`/posts/${id}`);
//   return data;
// });

// export type Post = {
//   _id: string;
//   text: string;
//   like: [string];
//   viewsCount: number;
//   user: UserData;
//   imageUrl: string;
//   createdAt: string;
//   updatedAt: string;
// };

// type Posts = {
//   items: Post[];
//   status: string;
// };

// interface PostsSliceState {
//   posts: Posts;
// }

// const initialState: PostsSliceState = {
//   posts: {
//     items: [],
//     status: 'loading',
//   },
// };

// const postSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Получение статей
//     builder.addCase(fetchPosts.pending, (state) => {
//       state.posts.status = 'loading';
//       state.posts.items = [];
//     });
//     builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
//       state.posts.status = 'success';
//       state.posts.items = action.payload;
//     });
//     builder.addCase(fetchPosts.rejected, (state) => {
//       state.posts.status = 'error';
//       state.posts.items = [];
//     });
//   },
// });

// export const postsReducer = postSlice.reducer;

export {};
