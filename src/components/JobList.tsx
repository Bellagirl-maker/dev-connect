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
      ) : (
          jobs.map((job) => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>Description: {job.description}</p>
              <p>Salary: {job.salary}</p>
              <button onClick={() => dispatch(removeJob(jobs.id))}
              >
                Remove
              </button>
            </div>
          ))
      )}
      
    </div>
  )
}

export default JobList
