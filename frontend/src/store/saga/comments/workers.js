import { call, put } from 'redux-saga/effects'
import { fillComments } from '../../reducers/comments'
import { commentsApi } from '../../../network/api/comment'

export function* getArticleCommentsWorker(action) {
  try {
    const response = yield call(commentsApi.get, action.payload)
    console.log(action.payload)
    yield put(fillComments(response))
  } finally {
  }
}
