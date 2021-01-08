import {
  __GetCompanyJobsites,
  __GetJobsite,
  __GetJobsites,
  __CreateJobsite,
  __UpdateJobsite
} from '../../services/JobsiteService'

import {
  __CreateSpecification
} from '../../services/SpecificationService'

import {
  CREATE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  CREATE_ENTITY, 
  GET_ENTITIES, 
  GET_JOBSITE,
  HIDE_SPECIFICATION_FORM,
  SHOW_SPECIFICATION_FORM,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} from '../types'


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

export const createSpecification = (formData) => async (dispatch) => {
  try{
    const entity = await __CreateSpecification(formData)
    dispatch({
      type: CREATE_SPECIFICATION,
      payload: entity
    })
  }catch(error){
    throw error
  }
}

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
    //perform second action
  }catch(error){
    throw error
  }
}

export const hideSpecForm = (dispatch) => ({
  type: HIDE_SPECIFICATION_FORM,
  payload: null
})

export const showSpecForm = (dispatch) => ({
  type: SHOW_SPECIFICATION_FORM,
  payload: null
})

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