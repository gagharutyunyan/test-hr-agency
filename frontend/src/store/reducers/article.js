import { createSlice } from '@reduxjs/toolkit'

export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState: { articles: [], article: {} },
  reducers: {
    getArticles: () => {},
    getArticle: () => {},
    fillArticles: (state, { payload }) => {
      state.articles = payload
    },
    fillArticle: (state, { payload }) => {
      state.article = payload
    },
    deleteArticle: (state, { payload: id }) => {
      state.articles = state.articles.filter((el) => el.id !== id)
    },
  },
})

export const { getArticles, fillArticles, fillArticle, getArticle, deleteArticle } = articleSlice.actions
export const { name: articleReducerPath, reducer: articleReducer } = articleSlice
