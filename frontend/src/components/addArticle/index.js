import { useDispatch, useSelector } from 'react-redux'

export const AddArticle = () => {
  const dispatch = useDispatch()
  const article = useSelector((state) => state.articleSlice.article)

  return <h1>add article</h1>
}
