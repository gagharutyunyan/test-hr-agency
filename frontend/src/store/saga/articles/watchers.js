import { takeLatest } from 'redux-saga/effects'
import { createArticle, getArticle, getArticles } from '../../reducers/article'
import { addArticleWorker, getArticlesWorker, getArticleWorker } from './workers'

export function* watchArticles() {
  yield takeLatest(getArticles.type, getArticlesWorker)
  yield takeLatest(getArticle.type, getArticleWorker)
  yield takeLatest(createArticle.type, addArticleWorker)
}
