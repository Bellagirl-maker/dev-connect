import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { removeJob } from '../features/jobSlice'

const JobList = () => {
    const jobs = useSelector((state: RootState) => state.jobs.jobs);
    const dispatch = useDispatch();
  return (
    <div>
      
    </div>
  )
}

export default JobList
