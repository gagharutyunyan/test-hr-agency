import { all } from 'redux-saga/effects'
import { watchArticles } from './articles/watchers'

export function* rootSaga() {
  yield all([watchArticles()])
}
