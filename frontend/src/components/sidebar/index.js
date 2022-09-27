import { Search } from '../search'
import { Range } from '../range'
import './style.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Range />
    </div>
  )
}
