const {
  CREATE_JOBSITE,
  CREATE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  GET_ENTITIES,
  GET_JOBSITE,
  HIDE_SPECIFICATION_FORM,
  SHOW_SPECIFICATION_FORM,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} = require('../types')

const iState = {
  companyJobsites: [],
  displaySpecForm: false,
  jobsites: [],
  jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  jobsiteForm: {},
  jobsite: null,
  //spec list
  refreshJobsiteList: true,
  refreshJobsite: true,
  specifications: []
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
      console.log("REDUCER JS Get: ", action.payload )
      return {
        ...state,
        jobsite: action.payload,
        refreshJobsite: false,
        specifications: action.payload.specifications
      }
    case CREATE_JOBSITE:
      return { ...state, jobsite: action.payload }
    case SHOW_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: true }
    case HIDE_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: false }
    case CREATE_SPECIFICATION:
      return { ...state, specifications: [...state.specifications, action.payload], displaySpecForm: false }
    case UPDATE_ENTITY:
      return { ...state, jobsite: action.payload }
    case UPDATE_JOBSITE_FORM:
      return { ...state, jobsiteForm: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
