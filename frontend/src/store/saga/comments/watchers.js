import { takeLatest } from 'redux-saga/effects'
import { getComments } from '../../reducers/comments'
import { getArticleCommentsWorker } from './workers'

export function* watchArticleComments() {
  yield takeLatest(getComments.type, getArticleCommentsWorker)
}
