import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TTodo = {
  id: string;
  title: string;
  details: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
