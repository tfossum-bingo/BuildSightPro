const {
  GET_ENTITIES,
  GET_ENTITY,
  CREATE_ENTITY,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} = require('../types')

import { userRefreshNeeded } from '../actions/UserActions'

const iState = {
  jobsites: [],
  jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  jobsiteForm: {},
  jobsite: null
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case DEPARTMENT_LOADING_TYPE:
      return { ...state, departmentsLoading: action.payload }
    case GET_ENTITIES:
      return { ...state, jobsites: action.payload }
    case GET_ENTITY:
      return { ...state, jobsite: action.payload }
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
