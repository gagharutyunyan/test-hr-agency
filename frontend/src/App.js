import { Navigate, useRoutes } from 'react-router-dom'
import { simpleMode } from './routes'

export const App = () => {
  return useRoutes([...simpleMode, { path: '*', element: <Navigate to="/" /> }])
}
