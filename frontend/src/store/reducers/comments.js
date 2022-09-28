import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: { comments: { records: [], total: 0 } },
  reducers: {
    getComments: () => {},
    fillComments: (state, { payload }) => {
      state.comments = payload
    },
  },
})

export const { getComments, fillComments } = commentsSlice.actions
export const { name: commentsReducerPath, reducer: commentsReducer } = commentsSlice
