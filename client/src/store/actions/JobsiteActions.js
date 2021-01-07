import {
  __GetJobsite,
  __GetJobsite,
  __CreateJobsite,
  __UpdateJobsite
} from '../../services/JobsiteService'
import { 
  GET_ENTITIES, 
  GET_ENTITY, 
  CREATE_ENTITY, 
  UPDATE_ENTITY
} from '../types'

export const getGetJobsites = () => async (dispatch) => {
  try{
    const entities = await __GetJobsites()
    dispatch({
      type: GET_ENTITIES,
      payload: entities
    })
  }catch(error){
    throw error
  }
}

export const getGetJobsite = () => async (dispatch) => {
  try{
    const entity = await __GetJobsite()
    dispatch({
      type: GET_ENTITY,
      payload: entity
    })
  }catch(error){
    throw error
  }
}

export const createJobsite = () => async (dispatch) => {
  try{
    const entity = await __CreateJobsite()
    dispatch({
      type: CREATE_ENTITY,
      payload: entity
    })
  }catch(error){
    throw error
  }
}

export const updateJobsite = () => async (dispatch) => {
  try{
    const entity = await __UpdateJobsite()
    dispatch({
      type: UPDATE_ENTITY,
      payload: entity
    })
  }catch(error){
    throw error
  }
}