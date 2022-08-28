import axios from 'axios'

export const getOrganizations = () => {
  return axios.get('https://62fce1886e617f88dea01ce7.mockapi.io/organizations/')
}

export const getOrganization = (id) => {
  return axios.get(`https://62fce1886e617f88dea01ce7.mockapi.io/organizations/${id}`)
}

export const createOrganization = (formData) => {
  return axios.post('https://62fce1886e617f88dea01ce7.mockapi.io/organizations/', formData)
}

export const editOrganization = (id, formData) => {
  return axios.put(`https://62fce1886e617f88dea01ce7.mockapi.io/organizations/${id}`, formData)
}

export const deleteOrganization = (id) => {
  return axios.delete(`https://62fce1886e617f88dea01ce7.mockapi.io/organizations/${id}`)
}
