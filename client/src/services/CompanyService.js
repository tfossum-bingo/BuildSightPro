import ApiClient from './ApiClient'


export const __CreateCompany = async (formData) => {
  try {
    const res = await ApiClient.post('/companies/', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetCompanies = async () => {
  try {
    const res = await ApiClient.get('/companies/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetCompanyUsers = async (companyId) => {
  try {
    const res = await ApiClient.get(`/companies/${companyId}/users`)
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

