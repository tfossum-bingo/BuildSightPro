import ApiClient from './ApiClient';

export const __GetCompanies = async () => {
  console.log('SVC GetCompanies')
  try {
    const res = await ApiClient.get('/companies/');
    return res.data;
  } catch (error) {
    throw error;
  }
};


export const __CreateSpecification = async (formData) => {
  console.log("SVC CreateSpec", formData)
  try {
    const res = await ApiClient.post('/specifications/', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

