const {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_JOBSITE,
  CREATE_JOBSITE_USER,
  CREATE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  GET_ENTITIES,
  GET_JOBSITE,
  HIDE_JOBSITE_FORM,
  HIDE_JOBSITE_USER_FORM,
  HIDE_SPECIFICATION_FORM,
  RESET_JOBSITE_STATE,
  SHOW_JOBSITE_FORM,
  SHOW_JOBSITE_USER_FORM,
  SHOW_SPECIFICATION_FORM,
  UPDATE_JOBSITE_FORM
} = require('../types')

const iState = {
  companyJobsites: [],
  displayJobsiteForm: false,
  displayJobsiteUserForm: false,
  displaySpecForm: false,
  jobsiteForm: {},
  jobsite: null,
  jobsiteUsers: [],
  jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  jobsites: [],
  //spec list
  refreshJobsiteList: true,
  refreshJobsite: true,
  specifications: []
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case ACKNOWLEDGE_SPECIFICATION:
      const fewerSpecs = state.specifications.filter((spec, index) => spec.id !== action.payload.id)
      return { ...state, specifications: [...fewerSpecs, action.payload] }
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
        jobsiteUsers: action.payload.jobsiteUsers,
        refreshJobsite: false,
        specifications: action.payload.specifications
      }
    case CREATE_JOBSITE:
      return { ...state, companyJobsites: [...state.companyJobsites, action.payload], displayJobsiteForm: false }
    case CREATE_JOBSITE_USER:
      return { ...state, jobsiteUsers: [...state.jobsiteUsers, action.payload], displayJobsiteUserForm: false }
    case HIDE_JOBSITE_FORM:
      return { ...state, displaySpecForm: false }
    case HIDE_JOBSITE_USER_FORM:
      return { ...state, displayJobsiteUserForm: false }
    case HIDE_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: false }
    case SHOW_JOBSITE_FORM:
      return { ...state, displaySpecForm: true }
    case SHOW_JOBSITE_USER_FORM:
      return { ...state, displayJobsiteUserForm: true }
    case SHOW_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: true }
    case CREATE_SPECIFICATION:
      return { ...state, specifications: [...state.specifications, action.payload], displaySpecForm: false }
    case UPDATE_JOBSITE_FORM:
      return { ...state, jobsiteForm: action.payload }
    case RESET_JOBSITE_STATE:
      return { ...state, companyJobsites: [], jobsites: [], jobsite: null, jobsiteUsers: [], specifications: [] }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
