import { call, put } from 'redux-saga/effects'
import { fillComments, fillNewComment, setIsCommentsLoading, setIsCreateCommentsLoading } from '../../reducers/comments'
import { commentsApi } from '../../../network/api/comment'

export function* getArticleCommentsWorker(action) {
  try {
    yield put(setIsCommentsLoading(true))
    const response = yield call(commentsApi.get, action.payload)
    yield put(fillComments(response))
  } finally {
    yield put(setIsCommentsLoading(false))
  }
}

export function* addArticleCommentWorker(action) {
  try {
    yield put(setIsCreateCommentsLoading(true))
    const response = yield call(commentsApi.post, action.payload)
    yield put(fillNewComment(response))
  } finally {
    yield put(setIsCreateCommentsLoading(false))
  }
}
