import { createSlice } from '@reduxjs/toolkit'

export interface PostSlice {
  title: string
}

const initialState: PostSlice = {
  title: ""
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePost: (state) => {
      state.title = "Update"
    },
  },
})

export const { updatePost } = postSlice.actions

export default postSlice.reducer