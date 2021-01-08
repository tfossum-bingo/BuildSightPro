const {
  GET_COMPANY_JOBSITES,
  GET_ENTITIES,
  GET_JOBSITE,
  CREATE_ENTITY,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} = require('../types')

const iState = {
  companyJobsites: [],
  jobsites: [],
  jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  jobsiteForm: {},
  jobsite: null,
  refreshJobsiteList: true,
  refreshJobsite: true
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMPANY_JOBSITES:
      return {
        ...state,
        companyJobsites: action.payload,
        refreshJobsiteList: false
      }
    case GET_ENTITIES:
      return { ...state, jobsites: action.payload }
    case GET_JOBSITE:
      console.log("REDUCER JS Get: ", action.payload)
      return { 
        ...state,
        jobsite: action.payload, 
        refreshJobsite: false
      }
    case CREATE_ENTITY:
      return { ...state, jobsite: action.payload }
    case UPDATE_ENTITY:
      return { ...state, jobsite: action.payload }
    case UPDATE_JOBSITE_FORM:
      return { ...state, jobsiteForm: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
