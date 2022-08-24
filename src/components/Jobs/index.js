import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob, deleteJob } from '../../apis/jobs'
import Form from '../Form'
import List from '../list'
//ABCD
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
    setFormData(data)
    const element = document.querySelector('#modal-form-user')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }
  const onDelete = id => {
    deleteJob(id).then(res => {
      fetchData()
    }).catch(error => {
      console.log(error)
    })
  }
// demo

  return (
    <div>
      <header className='header row'>
        <h4 className='col-7'>Tasks</h4>
      </header>
      <Form form={formData} submit={onSubmit} />
      <List list={list} Edit={editJob} Delete={deleteJob}/>
    </div>
  )
}

export default Jobs
