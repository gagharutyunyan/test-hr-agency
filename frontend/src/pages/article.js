import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../store/reducers/article'
import { Comment } from '../components/comment'
import { Paginator } from '../components/paginator'
import { AiOutlineLeft } from 'react-icons/ai'

export const ArticlePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { title, text } = useSelector((state) => state.articleSlice.article)

  useEffect(() => {
    dispatch(getArticle({ id }))
  }, [dispatch, id])

  return (
    <div className="articlePageContainer">
      <Link to="/" className="goBackLink">
        <AiOutlineLeft /> <span>На главную</span>
      </Link>
      <h1>{title}</h1>
      <p>{text}</p>
      <Comment />
      <Paginator />
    </div>
  )
}
