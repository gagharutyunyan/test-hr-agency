import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../store/reducers/article'
import { Comment } from '../components/comment'
import { Paginator } from '../components/paginator'

export const ArticlePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const article = useSelector((state) => state.articleSlice.article)

  useEffect(() => {
    dispatch(getArticle({ id }))
  }, [dispatch, id])

  return (
    <div>
      go back
      <h1>{article?.id}</h1>
      <Comment />
      <Paginator />
    </div>
  )
}
