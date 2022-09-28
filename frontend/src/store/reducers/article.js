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
      state.articles.total += 1
    },
    createArticle: (state, { payload }) => {
      state.article = payload
    },
    deleteArticle: (state, { payload: id }) => {
      state.articles.data = state.articles.data.filter((el) => el.id !== id)
      state.articles.total -= 1
    },
    setIsArticleLoading: (state, { payload }) => {
      state.article.isLoading = payload
    },
    setIsArticlesLoading: (state, { payload }) => {
      state.articles.isLoading = payload
    },
  },
})

export const {
  getArticles,
  fillArticles,
  fillArticle,
  getArticle,
  deleteArticle,
  createArticle,
  fillNewArticle,
  setIsArticleLoading,
  setIsArticlesLoading,
} = articleSlice.actions
export const { name: articleReducerPath, reducer: articleReducer } = articleSlice
