import { createSlice } from '@reduxjs/toolkit'
import {Post} from '../../models/post';

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePost: (state) => {
      state = []
    },
  },
})

export const { updatePost } = postSlice.actions

export default postSlice.reducer