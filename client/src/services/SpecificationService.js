import ApiClient from './ApiClient'

export const __AcknowledgeSpecification = async (data) => {
  try {
    const res = await ApiClient.post('/specification_users/', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CreateSpecification = async (formData) => {
  try {
    const res = await ApiClient.post('/specifications/', formData)
    return res.data
  } catch (error) {
    throw error
  }
}


export const __DeleteSpecification = async (specificationId) => {
  try {
    const res = await ApiClient.delete(`/specifications/${specificationId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
