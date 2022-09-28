import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: { comments: { records: [], total: 0, isLoading: false } },
  reducers: {
    getComments: () => {},
    fillComments: (state, { payload }) => {
      state.comments = payload
    },
    createComment: () => {},
    fillNewComment: (state, { payload }) => {
      state.comments.records.unshift(payload.data)
      state.comments.total += 1
    },
    setIsCommentsLoading: (state, { payload }) => {
      state.comments.isLoading = payload
    },
    setIsCreateCommentsLoading: (state, { payload }) => {
      state.comments.isLoading = payload
    },
  },
})

export const {
  getComments,
  createComment,
  fillNewComment,
  fillComments,
  setIsCommentsLoading,
  setIsCreateCommentsLoading,
} = commentsSlice.actions
export const { name: commentsReducerPath, reducer: commentsReducer } = commentsSlice
