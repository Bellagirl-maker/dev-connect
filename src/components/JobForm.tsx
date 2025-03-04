import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJob } from '../features/jobSlice'
import { v4 as uuidv4 } from 'uuid'

const JobForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addJob({ id: uuidv4(), title, company, location, description, salary })
        );
        setTitle("");
        setCompany("");
        setLocation("");
        setDescription("");
        setSalary("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Job Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type='text'
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
                placeholder='Job Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type='text'
                placeholder='Salary'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button type='submit'></button>
      </form>
    
      

  )
}

export default JobForm
