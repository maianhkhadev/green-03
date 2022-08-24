import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob,deleteJob } from '../../apis/jobs'
import List from '../List'

const DEFAULT_FORM_DATA = { title: '', type: '', descriptor: '' }

const Jobs = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    getJobs()
      .then(response => {
        setList(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = () => {

  }

  const onCreate = () => {

    
  }

  const onEdit = data => {

  }

  return (
    <div>
      <header className='header row'>
        <h4 className='col-7'>Tasks</h4>
        <div className='container'>
        <List list={list}/>

        </div>
      </header>
    </div>
  )
}

export default Jobs
