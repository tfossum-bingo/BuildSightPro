import {
  __GetCompanyJobsites,
  __GetJobsite,
  __GetJobsites,
  __CreateJobsite,
  __UpdateJobsite
} from '../../services/JobsiteService'

import {
  GET_COMPANY_JOBSITES,
  GET_ENTITIES, 
  GET_JOBSITE, 
  CREATE_ENTITY, 
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} from '../types'


export const getCompanyJobsites = (companyId) => async (dispatch) => {
  try{
    const entities = await __GetCompanyJobsites(companyId)
    dispatch({
      type: GET_COMPANY_JOBSITES,
      payload: entities
    })
  }catch(error){
    throw error
  }
}

export const getJobsites = () => async (dispatch) => {
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

export const getJobsite = (jobsiteId) => async (dispatch) => {
  try{
    const entity = await __GetJobsite(jobsiteId)
    console.log("Action getJobsite: ", entity)
    dispatch({
      type: GET_JOBSITE,
      payload: entity
    })
  }catch(error){
    throw error
  }
}

export const createJobsite = (formValues) => async (dispatch) => {
  try{
    const entity = await __CreateJobsite(formValues)
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

export const updateJobsiteForm =  (formValue) => ({
  type: UPDATE_JOBSITE_FORM,
  payload: formValue
})