import { call, put } from 'redux-saga/effects'
import {
  fillArticle,
  fillArticles,
  fillNewArticle,
  setIsArticleLoading,
  setIsArticlesLoading,
} from '../../reducers/article'
import { articlesApi } from '../../../network'

export function* getArticlesWorker(action) {
  try {
    yield put(setIsArticlesLoading(true))
    const response = yield call(articlesApi.get, action.payload)
    yield put(fillArticles(response))
  } finally {
    yield put(setIsArticlesLoading(false))
  }
}

export function* getArticleWorker(action) {
  try {
    yield put(setIsArticleLoading(true))
    const response = yield call(articlesApi.get, action.payload)
    yield put(fillArticle(response))
  } finally {
    yield put(setIsArticleLoading(false))
  }
}

export function* addArticleWorker(action) {
  try {
    yield put(setIsArticleLoading(true))
    const response = yield call(articlesApi.post, action.payload)
    yield put(fillNewArticle(response))
  } finally {
    yield put(setIsArticleLoading(false))
  }
}
