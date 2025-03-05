import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { removeJob } from '../features/jobSlice'

const JobList = () => {
    const jobs = useSelector((state: RootState) => state.jobs.jobs);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Job Listing</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      )}
      
    </div>
  )
}

export default JobList
