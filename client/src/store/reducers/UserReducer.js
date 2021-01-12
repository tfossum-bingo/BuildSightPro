const {
  GET_ENTITIES,
  GET_ENTITY,
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


const UserReducer = (state = iState, action, props) => {
  switch (action.type) {
    case GET_ENTITIES:
      return { ...state, user: action.payload }
    case GET_ENTITY:
      return {
        ...state,
        user: action.payload,
        refreshNeeded: false
      }
    case UPDATE_LOGIN_FORM:
      return { ...state, [action.payload.name]: action.payload.value }
    case LOGIN_USER:
      return { ...state, user: action.payload }
    case LOGOUT_USER:
      return { ...state, user: null, email: null, password: null }
    default:
      return { ...state }
  }
}

export default UserReducer
