import {
  __GetProfiles,
  __GetUser,
  __LoginUser,
  __LogoutUser,
  __RegisterUser,
  __UpdateUser
} from '../../services/UserService'

import { 
  GET_ENTITIES, 
  GET_ENTITY, 
  CREATE_ENTITY, 
  UPDATE_ENTITY,
  UPDATE_LOGIN_FORM,
  LOGIN_USER,
  LOGOUT_USER
} from '../types'

export const getGetUsers = () => async (dispatch) => {
  try{
    const users = await __GetProfiles()
    dispatch({
      type: GET_ENTITIES,
      payload: users
    })
  }catch(error){
    throw error
  }
}

export const getUser = () => async (dispatch) => {
  try{
    const user = await __GetUser()
    dispatch({
      type: GET_ENTITY,
      payload: user
    })
  }catch(error){
    throw error
  }
}

export const createUser = () => async (dispatch) => {
  try{
    const user = await __RegisterUser()
    dispatch({
      type: CREATE_ENTITY,
      payload: user
    })
  }catch(error){
    throw error
  }
}

export const updateUser = () => async (dispatch) => {
  try{
    const user = await __UpdateUser()
    dispatch({
      type: UPDATE_ENTITY,
      payload: user
    })
  }catch(error){
    throw error
  }
}

export const updateLoginForm =  (formValue) => ({
  type: UPDATE_LOGIN_FORM,
  payload: formValue
})

export const loginUser = (loginFormValues) => async (dispatch) => {
  try{
    const user = await __LoginUser(loginFormValues)
    dispatch({
      type: LOGIN_USER,
      payload: user
    })
  }catch(error){
    throw error
  }
}

export const logoutUser = () => async (dispatch) => {
  try{
    const user = await __LogoutUser()
    dispatch({
      type: LOGOUT_USER,
      payload: user
    })
  }catch(error){
    throw error
  }
}