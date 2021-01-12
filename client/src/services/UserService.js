import ApiClient from './ApiClient'

export const __GetProfiles = async () => {
  try {
    const res = await ApiClient.get(`/users`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetUser = async (user_id) => {
  try {
    const res = await ApiClient.get(`/users/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CreateUser = async (formData) => {
  try {
    const res = await ApiClient.post('/users/', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateUser = async (formData) => {
  try {
    const res = await ApiClient.put('/users/', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/users/login', userData)
    localStorage.setItem("userId", res.data.id)
    return res.data
  } catch (error) {
    throw error
  }
}


