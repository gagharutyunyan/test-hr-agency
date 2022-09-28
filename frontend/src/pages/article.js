import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../store/reducers/article'
import { Comment } from '../components/comment'
import { Paginator } from '../components/paginator'
import { AiOutlineLeft } from 'react-icons/ai'
import { AddComment } from '../components/addComment'
import { getComments } from '../store/reducers/comments'
import { useSetFilters } from '../hooks/useSetFilters'
import { Spin } from 'antd'

export const ArticlePage = () => {
  const setFilters = useSetFilters()
  const dispatch = useDispatch()
  const [URLParams] = useSearchParams()
  const { id } = useParams()

  const { title, text, isLoading: isArticleLoading = null } = useSelector((state) => state.articleSlice.article)
  const {
    records: comments,
    total,
    isLoading: isCommentsLoading = null,
  } = useSelector((state) => state.commentsSlice.comments)
  const isLoading = isArticleLoading || isCommentsLoading

  const limit = parseInt(URLParams.get('limit')) || 3
  const currentPage = parseInt(URLParams.get('offset')) || 1
  const numPages = Math.ceil(total / limit || 1)

  const setCurrentPage = (offset) => {
    setFilters({ offset })
  }

  useEffect(() => {
    dispatch(getArticle({ id }))
    dispatch(getComments({ article: id, limit, ...Object.fromEntries(URLParams) }))
  }, [dispatch, id, limit, URLParams])

  return (
    <div className="articlePageContainer">
      <Link to="/" className="goBackLink">
        <AiOutlineLeft /> <span>На главную</span>
      </Link>
      <Spin tip="Loading..." spinning={isLoading}>
        <h1>{title}</h1>
        <p>{text}</p>
      </Spin>
      <AddComment />

      {comments.length !== 0 && (
        <>
          <Spin tip="Loading..." spinning={isLoading}>
            <div className="articleCommentsContainer">
              {comments.map((props) => (
                <Comment key={props.id} {...props} />
              ))}
            </div>
          </Spin>

          <Paginator numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  )
}
