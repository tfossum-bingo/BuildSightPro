const {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_ENTITY,
  GET_ENTITIES,
  GET_ENTITY,
  UPDATE_ENTITY
} = require('../types')

const iState = {
  jobsites: [],
  jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  jobsite: null
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ENTITIES:
      return { ...state, jobsites: action.payload }
    case GET_ENTITY:
      return { ...state, jobsite: action.payload }
    case CREATE_ENTITY:
      return { ...state, jobsite: action.payload }
    case UPDATE_ENTITY:
      return { ...state, jobsite: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer