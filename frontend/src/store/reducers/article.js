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
    fillNewArticle: (state, { payload }) => {
      state.articles.data.unshift(payload.data)
    },
    createArticle: (state, { payload }) => {
      state.article = payload
    },
    deleteArticle: (state, { payload: id }) => {
      state.articles.data = state.articles.data.filter((el) => el.id !== id)
      state.articles.total -= 1
    },
  },
})

export const { getArticles, fillArticles, fillArticle, getArticle, deleteArticle, createArticle, fillNewArticle } =
  articleSlice.actions
export const { name: articleReducerPath, reducer: articleReducer } = articleSlice
