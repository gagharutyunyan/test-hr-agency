import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: { comments: {} },
  reducers: {
    getComments: () => {},
    fillComments: (state, { payload }) => {
      state.comments = payload
    },
  },
})

export const { getComments } = commentsSlice.actions
export const { name: commentsReducerPath, reducer: commentsReducer } = commentsSlice
