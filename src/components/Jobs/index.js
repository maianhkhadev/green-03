import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob } from '../../apis/jobs'
import Form from "./Form";
import List from "./List";

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

  const onDelete = () => {

  }

  const onEdit = data => {

  }

  return (
    <div>
      {/* Start header */}
      <header className='header row'>
        <h4 className='col-7'>Tasks</h4>
        <button type='button' data-bs-toggle='modal' data-bs-formTarget='#formModal' className='btn btn-info col-5'>Create User</button>
      </header>
      {/* Start main */}
      <main>
        <div>
          <Form
            onSubmit={onSubmit}
            onChange={onChange}
            formData={formData}
            list={list}
          />
        </div>
        <div>
          <List list={list} setList={setList} onEdit={onEdit} onDelete={onDelete}/>
        </div>
      </main>
    </div>
  )
}

export default Jobs
