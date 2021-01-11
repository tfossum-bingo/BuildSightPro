import AlphaSort from '../../utils/AlphaSort'

const {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_JOBSITE,
  CREATE_JOBSITE_USER,
  CREATE_SPECIFICATION,
  DELETE_JOBSITE_USER,
  DELETE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  GET_ENTITIES,
  GET_JOBSITE,
  HIDE_JOBSITE_FORM,
  HIDE_JOBSITE_USER_FORM,
  HIDE_SPECIFICATION_FORM,
  REFRESH_SPECIFICATIONS_LIST,
  RESET_JOBSITE_STATE,
  SHOW_JOBSITE_FORM,
  SHOW_JOBSITE_USER_FORM,
  SHOW_SPECIFICATION_FORM,
  SPECIFICATIONS_NEED_REFRESH,
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
  specifications: [],
  specificationsNeedsRefresh: false
}


const preSortSpecs = (specList) => {
  const theSpecs = [...specList]
  theSpecs.sort(function (x, y) {
    return AlphaSort(x.title.toLowerCase(), y.title.toLowerCase())
  })
  return theSpecs
}

const preSortUsers = (userList) => {
  const theUsers = [...userList]
  theUsers.sort(function (x, y) {
    return AlphaSort(fullName(x), fullName(y))
  })
  return theUsers
}

const fullName = (user) => {
  console.log("fullname: ", user)
  return user.User.firstName.toLowerCase() + " " + user.User.lastName.toLowerCase()
}


const preSortJobsites = (companyJobsites) => {
  const jobsites = [...companyJobsites]
  jobsites.sort(function (x, y) {
    return AlphaSort(x.address_1, y.address_1)
  })
  return jobsites
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case ACKNOWLEDGE_SPECIFICATION:
      let ackSpecs = state.specifications.filter((spec, index) => spec.id !== action.payload.id)
      ackSpecs.push(action.payload)
      ackSpecs = preSortSpecs(ackSpecs)
    case GET_COMPANY_JOBSITES:
      return {
        ...state,
        companyJobsites: preSortJobsites(action.payload),
        refreshJobsiteList: false
      }
    case GET_ENTITIES:
      return { ...state, jobsites: action.payload }
    case GET_JOBSITE:
      return {
        ...state,
        jobsite: action.payload,
        jobsiteUsers: preSortUsers(action.payload.jobsiteUsers),
        refreshJobsite: false,
        specifications: preSortSpecs(action.payload.specifications)
      }
    case CREATE_JOBSITE:
      const createJobsites = [...state.companyJobsites, action.payload]
      preSortJobsites(createJobsites)
      return { ...state, companyJobsites: createJobsites, displayJobsiteForm: false }
    case CREATE_JOBSITE_USER:
      let createJobsiteUsers = [...state.jobsiteUsers, action.payload]
      createJobsiteUsers = preSortUsers(createJobsiteUsers)
      return { 
        ...state, 
        jobsiteUsers: createJobsiteUsers, 
        displayJobsiteUserForm: false 
      }
    case DELETE_JOBSITE_USER:
      const deleteJobsiteUsers = state.jobsiteUsers.filter((jobsiteUser, index) => jobsiteUser.id !== action.payload)
      return { 
        ...state, 
        jobsiteUsers: preSortUsers(deleteJobsiteUsers) 
      }
    case DELETE_SPECIFICATION:
      const postDeleteSpecs = state.specifications.filter((spec, index) => spec.id !== action.payload)
      return { ...state, specifications: [...postDeleteSpecs] }
    case HIDE_JOBSITE_FORM:
      return { ...state, displaySpecForm: false }
    case HIDE_JOBSITE_USER_FORM:
      return { ...state, displayJobsiteUserForm: false }
    case HIDE_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: false }
    case REFRESH_SPECIFICATIONS_LIST:
      const refreshSpecs = preSortSpecs(action.payload)
      return { ...state, specifications: refreshSpecs, specificationsNeedsRefresh: false }
    case SHOW_JOBSITE_FORM:
      return { ...state, displaySpecForm: true }
    case SHOW_JOBSITE_USER_FORM:
      return { ...state, displayJobsiteUserForm: true }
    case SHOW_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: true }
    case SPECIFICATIONS_NEED_REFRESH:
      return { ...state, specificationsNeedsRefresh: true }
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
