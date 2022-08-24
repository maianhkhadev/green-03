import { useState, useEffect } from 'react'
import './style.css'
import { getJobs, createJob, editJob, deleteJob } from '../../apis/jobs'





const DEFAULT_FORM_Data = { title: '', type: '', descriptor: '' }

const validate = (list, data) => {
  console.log(data)
      if (data.name === '' || data.email === '') {
          return false
      }

      // validate Create: kiểm tra trùng ở nút Create
      if (!data.id) { 
          const newItem = list.find((item) => {
              return item.name === data.name || item.email === data.email
          })
          return newItem ? false : true
      }


      // validate nút Edit: kiểm tra trùng ở nút Edit
      if (data.id) {
          const newItem = list.find((item) => {
              return item.id !== data.id && (item.name === data.name || item.email === data.email)
          })
          return newItem ? false : true
      }
}

const Jobs = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_Data)
  const [list, setList] = useState([])
  const [error, setError] = useState (false)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    getJobs()
      .then(response => {
        setList(response.formData)
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
    const isValidated = validate(list, formData)
        console.log(isValidated)

        if(!isValidated) {
            setError(true)
        }

        if(isValidated) {
        
        if(!formData.id) { // nút Create
            createJob(formData).then((res) => {
                fetchData()
                setFormData(DEFAULT_FORM_Data)
            }).catch((error) => { console.log(error) })
        
        }
        if(formData.id) { // nút Edit
            editJob(formData.id, formData).then((res) => {
                fetchData()
                setFormData(DEFAULT_FORM_Data)
            }).catch(error => { console.log(error) 
            })
           
        }
        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.hide();
        }

  }

  const onCreate = () => {
    setFormData(DEFAULT_FORM_Data)
    const element = document.querySelector('#modal-form-user')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element);
    modal.show();
  }

  const onEdit = (formData) => {
    setFormData(formData)
    const element = document.querySelector('#modal-form-user')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element);
    modal.show();

  }
  const onDelete = (id) => {
    console.log(id)
          deleteJob(id).then((res) => {
            fetchData()
        })
        .catch((error) => { 
            console.log(error) }
            )
            fetchData()
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
