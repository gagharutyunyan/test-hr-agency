import { takeLatest } from 'redux-saga/effects'
import { createComment, getComments } from '../../reducers/comments'
import { addArticleCommentWorker, getArticleCommentsWorker } from './workers'

export function* watchArticleComments() {
  yield takeLatest(getComments.type, getArticleCommentsWorker)
  yield takeLatest(createComment.type, addArticleCommentWorker)
}
