import axios from 'axios'

export const getJobs = () => {
  return axios.get('https://62fce1886e617f88dea01ce7.mockapi.io/jobs/')
}

export const getJob = (id) => {
  return axios.get(`https://62fce1886e617f88dea01ce7.mockapi.io/jobs/${id}`)
}

export const createJob = (formData) => {
  return axios.post('https://62fce1886e617f88dea01ce7.mockapi.io/jobs/', formData)
}

export const editJob = (id, formData) => {
  return axios.put(`https://62fce1886e617f88dea01ce7.mockapi.io/jobs/${id}`, formData)
}

export const deleteJob = (id) => {
  return axios.delete(`https://62fce1886e617f88dea01ce7.mockapi.io/jobs/${id}`)
}
