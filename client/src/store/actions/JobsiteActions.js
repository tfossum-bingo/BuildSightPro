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
  __AcknowledgeSpecification
} from '../../services/SpecificationService'

import {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  CREATE_JOBSITE, 
  GET_ENTITIES, 
  GET_JOBSITE,
  SHOW_JOBSITE_FORM,
  HIDE_JOBSITE_FORM,
  HIDE_SPECIFICATION_FORM,
  RESET_JOBSITE_STATE,
  SHOW_SPECIFICATION_FORM,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} from '../types'

export const acknowledgeSpecification = (ackData) => async (dispatch) => {
  try{
    console.log(dispatch)
    const entity = await __AcknowledgeSpecification(ackData)
    console.log("SVC Ack Resp: ", entity)
    dispatch({
      type: ACKNOWLEDGE_SPECIFICATION,
      payload: entity
    })
  }catch(error){
    throw error
  }
}

export const createJobsite = (formValues) => async (dispatch) => {
  console.log("HIT Act createJobsite: ", formValues)
  try{
    const entity = await __CreateJobsite(formValues)
    dispatch({
      type: CREATE_JOBSITE,
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

export const resetJobsiteState = () => ({
  type: RESET_JOBSITE_STATE,
  payload: null
})

export const hideJobsiteForm = (dispatch) => ({
  type: HIDE_JOBSITE_FORM,
  payload: null
})

export const showJobsiteForm = (dispatch) => ({
  type: SHOW_JOBSITE_FORM,
  payload: null
})

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