import { call, put } from 'redux-saga/effects'
import { fillArticle, fillArticles } from '../../reducers/article'
import { articlesApi } from '../../../network'

export function* getArticlesWorker(action) {
  try {
    const response = yield call(articlesApi.get, action.payload)
    console.log(action.payload)
    yield put(fillArticles(response))
  } finally {
  }
}

export function* getArticleWorker(action) {
  try {
    const response = yield call(articlesApi.get, action.payload)
    yield put(fillArticle(response))
  } finally {
  }
}
