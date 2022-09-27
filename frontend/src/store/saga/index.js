import { all } from 'redux-saga/effects'
import { watchArticles } from './articles/watchers'
import { watchArticleComments } from './comments/watchers'

export function* rootSaga() {
  yield all([watchArticles(), watchArticleComments()])
}
