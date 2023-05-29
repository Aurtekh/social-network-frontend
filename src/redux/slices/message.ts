import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';
import { UserData } from './auth';

export const fetchDialogs = createAsyncThunk('dialogs/fetchDialogs', async () => {
  const { data } = await axios.get<Dialogs[]>('/dialogs');
  return data;
});

export const fetchMessage = createAsyncThunk('dialogs/fetchMessage', async (id: string) => {
  const { data } = await axios.get<Message[]>(`/dialogs/${id}`);
  return data;
});

export type Message = {
  _id: string;
  text: string;
  viewsCount: number;
  sender: UserData;
  recipient: UserData;
  date: string;
};

export type Dialogs = {
  _id: string;
  text: string;
  viewsCount: number;
  sender: UserData[];
  recipient: UserData[];
  date: string;
};

interface MessagesSliceState {
  messages: { items: Message[]; status: string };
  dialogs: { items: Dialogs[]; status: string };
}

const initialState: MessagesSliceState = {
  messages: {
    items: [],
    status: 'loading',
  },
  dialogs: {
    items: [],
    status: 'loading',
  },
};

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Получение диалогов
    builder.addCase(fetchDialogs.pending, (state) => {
      state.dialogs.status = 'loading';
      state.dialogs.items = [];
    });
    builder.addCase(fetchDialogs.fulfilled, (state, action: PayloadAction<Dialogs[]>) => {
      state.dialogs.status = 'success';
      state.dialogs.items = action.payload;
    });
    builder.addCase(fetchDialogs.rejected, (state) => {
      state.dialogs.status = 'error';
      state.dialogs.items = [];
    });

    // Получение сообщений
    builder.addCase(fetchMessage.pending, (state) => {
      state.messages.status = 'loading';
      state.messages.items = [];
    });
    builder.addCase(fetchMessage.fulfilled, (state, action: PayloadAction<Message[]>) => {
      state.messages.status = 'success';
      state.messages.items = action.payload;
    });
    builder.addCase(fetchMessage.rejected, (state) => {
      state.messages.status = 'error';
      state.messages.items = [];
    });
  },
});

export const messagesReducer = messagesSlice.reducer;
