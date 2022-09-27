import { call, put } from 'redux-saga/effects'
import { fillArticle, fillArticles, fillNewArticle } from '../../reducers/article'
import { articlesApi } from '../../../network'

export function* getArticleCommentsWorker(action) {
  try {
    const response = yield call(articlesApi.get, action.payload)
    console.log(action.payload)
    yield put(fillArticles(response))
  } finally {
  }
}
