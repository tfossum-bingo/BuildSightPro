const {
  GET_ENTITIES,
  GET_ENTITY,
  CREATE_ENTITY,
  UPDATE_ENTITY
} = require('../types')

const iState = {
  users: [],
  usersLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  loginForm: {},
  user: null,
  refreshNeeded: true
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
    case ENTITY_LOADING_TYPE:
      return { ...state, usersLoading: action.payload }
    case GET_ENTITIES:
      return { ...state, user: action.payload }
    case GET_ENTITY:
      return {
        ...state,
        user: action.payload,
        refreshNeeded: false
      }
    case CREATE_ENTITY:
      return { ...state, user: action.payload }
    case UPDATE_ENTITY:
      return { ...state, user: action.payload }
    case UPDATE_LOGIN_FORM:
      return { ...state, loginForm: action.payload }
    case LOGIN_USER:
      return { ...state, user: action.payload }
    case LOGOUT_USER:
      return { ...state, user: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
