import { DatePicker } from 'antd'
import { useSetFilters } from '../../hooks/useSetFilters'
const { RangePicker } = DatePicker

export const Range = () => {
  const setFilters = useSetFilters()

  const onCalendarChange = (dates) => {
    const [first, second] = dates
    const from = first?._d.toJSON() || ''
    const to = second?._d.toJSON() || ''

    setFilters({ from, to })
  }
  return <RangePicker onCalendarChange={onCalendarChange} />
}
