const {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_SPECIFICATION,
  HIDE_SPECIFICATION_FORM,
  GET_ENTITIES,
  GET_ENTITY,
  SHOW_SPECIFICATION_FORM,
  UPDATE_ENTITY
} = require('../types')

const iState = {
  specifications: [],
  displaySpecForm: false
  // jobsitesLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ENTITIES:
      return { ...state, jobsites: action.payload }
    case GET_ENTITY:
      return { ...state, jobsite: action.payload }
    case CREATE_SPECIFICATION:
      return { ...state, specifications: [...state.specifications, action.payload], displaySpecForm: false }
    case SHOW_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: true }
    case HIDE_SPECIFICATION_FORM:
      return { ...state, displaySpecForm: false }
    case UPDATE_ENTITY:
      return { ...state, jobsite: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
