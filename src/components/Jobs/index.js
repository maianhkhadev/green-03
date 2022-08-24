import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob } from '../../apis/jobs'

const DEFAULT_FORM_DATA = { title: '', type: '', descriptor:''}

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
    if(formData.id){
      createJob(formData).then(res => {
        setList(res.data)
       setFormData(DEFAULT_FORM_DATA)
      })
      .catch(error => {
        console.log(error)
      })
    }
    if(formData.id){
      editJob(formData).then(res => {
        setList(res.data)
       setFormData(DEFAULT_FORM_DATA)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  const onCreate = () => {
    setFormData(DEFAULT_FORM_DATA)

  }

  const onEdit = data => {
      setFormData(data)
  }

  return (
    <div>

      {list.map((item) => {
        return (
          <div>
          <div key={item.id} className='list'>
            <div>title:{item.title}</div>
            <div>type:{item.type}</div>
            <div>descriptor:{item.descriptor}</div>
            <button onClick={() => { onEdit(item)}} >Edit</button>
          </div>
        </div>
        )
      })    
      }
 </div>
  )
}

export default Jobs
