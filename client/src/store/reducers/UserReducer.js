const {
  GET_ENTITIES,
  GET_ENTITY,
  CREATE_ENTITY,
  UPDATE_ENTITY,
  UPDATE_LOGIN_FORM,
  LOGIN_USER,
  LOGOUT_USER
} = require('../types')

const iState = {
  users: [],
  usersLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive'),
  email: '',
  passowrd: '',
  user: null,
  refreshNeeded: true
}

const JobsiteReducer = (state = iState, action) => {
  switch (action.type) {
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
      console.log('HIT RED updateLoginForm: ', action.payload.name, action.payload.value)
      return { ...state, [action.payload.name]: action.payload.value }
    case LOGIN_USER:
      return { ...state, user: action.payload }
    case LOGOUT_USER:
      return { ...state, user: action.payload }
    default:
      return { ...state }
  }
}

export default JobsiteReducer
