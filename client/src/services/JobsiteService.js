import ApiClient from './ApiClient';

export const __GetJobsites = async () => {
  try {
    const res = await ApiClient.get(`/jobsites`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetJobsite = async (jobsite_id) => {
  try {
    const res = await ApiClient.get(`/jobsites/${jobsite_id}`);
    console.log("SVC GetJobsite: ", res.data.address_1)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateJobsite = async (formData) => {
  try {
    const res = await ApiClient.post('/jobsites/', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateJobsite = async (jobsite_id, formData) => {
  try {
    const res = await ApiClient.put(`/jobsites/${jobsite_id}`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetCompanyJobsites = async (companyId) => {
  try {
    const res = await ApiClient.get(`/companies/${companyId}/jobsites`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
