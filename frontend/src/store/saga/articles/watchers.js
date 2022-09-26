import { takeLatest } from 'redux-saga/effects'
import { getArticle, getArticles } from '../../reducers/article'
import { getArticlesWorker, getArticleWorker } from './workers'

export function* watchArticles() {
  yield takeLatest(getArticles.type, getArticlesWorker)
  yield takeLatest(getArticle.type, getArticleWorker)
}
