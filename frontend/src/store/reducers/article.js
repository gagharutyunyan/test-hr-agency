import { createSlice } from '@reduxjs/toolkit'

export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState: { articles: {}, article: {} },
  reducers: {
    getArticles: () => {},
    getArticle: () => {},
    fillArticles: (state, { payload }) => {
      state.articles = payload
    },
    fillArticle: (state, { payload }) => {
      state.article = payload
    },
    createArticle: (state, { payload }) => {
      state.article = payload
    },
    deleteArticle: (state, { payload: id }) => {
      const filteredArticles = state.articles.data.filter((el) => el.id !== id)
      state.articles.data = filteredArticles
      state.articles.total -= 1
    },
  },
})

export const { getArticles, fillArticles, fillArticle, getArticle, deleteArticle } = articleSlice.actions
export const { name: articleReducerPath, reducer: articleReducer } = articleSlice
