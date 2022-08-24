import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob, deleteJob } from '../../apis/jobs'

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
    //create
    if(!formData.id) {
      createJob(formData).then(response => {
        fetchData()
        setFormData(DEFAULT_FORM_DATA)
      }).catch(error => {
        console.log(error)
      })
    }
    //edit
    if (formData.id) {
      editJob(formData.id, formData)
      .then((response) => {
          fetchData()
          setFormData(DEFAULT_FORM_DATA)
      })
      .catch((error) => {
          console.log(error)
      })
    }
  }

  const onCreate = () => {
    setFormData(DEFAULT_FORM_DATA)
    const element = document.querySelector('#modal-form-user')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }

  const onEdit = data => {
    setFormData(DEFAULT_FORM_DATA)
    const element = document.querySelector('#modal-form-user')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  }
   

  const onDelete = data => {

  }

  return (
    <div>
      <header className='header row'>
        <h4 className='col-7'>Tasks</h4>
      </header>
    </div>
  )
}

export default Jobs
