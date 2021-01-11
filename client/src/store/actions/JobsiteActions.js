import {
  __CreateJobsite,
  __GetCompanyJobsites,
  __GetJobsite,
  __GetJobsites,
  __GetJobsiteSpecifications,
  __UpdateJobsite
} from '../../services/JobsiteService'

import {
  __CreateJobsiteUser,
  __DeleteJobsiteUser
} from '../../services/JobsiteUserService'

import {
  __CreateSpecification, __DeleteSpecification
} from '../../services/SpecificationService'

import {
  __AcknowledgeSpecification
} from '../../services/SpecificationService'

import {
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_JOBSITE,
  CREATE_JOBSITE_USER,
  CREATE_SPECIFICATION,
  DELETE_JOBSITE_USER,
  DELETE_SPECIFICATION,
  GET_COMPANY_JOBSITES,
  GET_ENTITIES,
  GET_JOBSITE,
  HIDE_JOBSITE_FORM,
  HIDE_JOBSITE_USER_FORM,
  HIDE_SPECIFICATION_FORM,
  RESET_JOBSITE_STATE,
  REFRESH_SPECIFICATIONS_LIST,
  SHOW_JOBSITE_FORM,
  SHOW_JOBSITE_USER_FORM,
  SHOW_SPECIFICATION_FORM,
  SPECIFICATIONS_NEED_REFRESH,
  UPDATE_ENTITY,
  UPDATE_JOBSITE_FORM
} from '../types'

export const acknowledgeSpecification = (ackData) => async (dispatch) => {
  try {
    const entity = await __AcknowledgeSpecification(ackData)
    dispatch({
      type: ACKNOWLEDGE_SPECIFICATION,
      payload: entity
    })
  } catch (error) {
    throw error
  }
}

export const createJobsite = (formValues) => async (dispatch) => {
  try {
    const entity = await __CreateJobsite(formValues)
    dispatch({
      type: CREATE_JOBSITE,
      payload: entity
    })
  } catch (error) {
    throw error
  }
}

export const createJobsiteUser = (formData) => async (dispatch) => {
  try {
    const entity = await __CreateJobsiteUser(formData)
    dispatch({
      type: CREATE_JOBSITE_USER,
      payload: entity
    })
  } catch (error) {
    throw error
  }
}

export const createSpecification = (formData) => async (dispatch) => {
  try {
    const entity = await __CreateSpecification(formData)
    dispatch({
      type: CREATE_SPECIFICATION,
      payload: entity
    })
  } catch (error) {
    throw error
  }
}

export const deleteJobsiteUser = (jobsiteUserId) => async (dispatch) => {
  try {
    await __DeleteJobsiteUser(jobsiteUserId)
    dispatch({
      type: DELETE_JOBSITE_USER,
      payload: jobsiteUserId
    })
  } catch (error) {
    throw error
  }
}

export const deleteSpecification = (specificationId) => async (dispatch) => {
  try {
    await __DeleteSpecification(specificationId)  
    dispatch({
      type: DELETE_SPECIFICATION,
      payload: specificationId
    })
  } catch (error) {
    throw error
  }
}

export const getCompanyJobsites = (companyId) => async (dispatch) => {
  try {
    const entities = await __GetCompanyJobsites(companyId)
    dispatch({
      type: GET_COMPANY_JOBSITES,
      payload: entities
    })
  } catch (error) {
    throw error
  }
}

export const getJobsites = () => async (dispatch) => {
  try {
    const entities = await __GetJobsites()
    dispatch({
      type: GET_ENTITIES,
      payload: entities
    })
  } catch (error) {
    throw error
  }
}

export const getJobsite = (jobsiteId) => async (dispatch) => {
  try {
    const entity = await __GetJobsite(jobsiteId)
    dispatch({
      type: GET_JOBSITE,
      payload: entity
    })
    //perform second action
  } catch (error) {
    throw error
  }
}

export const refreshSpecificationsList = (jobsiteId) => async (dispatch) => {
  try {
    const refreshedSpecList = await __GetJobsiteSpecifications(jobsiteId)
    dispatch({
      type: REFRESH_SPECIFICATIONS_LIST,
      payload: refreshedSpecList
    })
  } catch (error) {
    throw error
  }
}

export const resetJobsiteState = () => ({
  type: RESET_JOBSITE_STATE,
  payload: null
})

export const setSpecificationsNeedRefresh = (dispatch) => ({
  type: SPECIFICATIONS_NEED_REFRESH,
  payload: null
})

export const hideJobsiteUserForm = (dispatch) => ({
  type: HIDE_JOBSITE_USER_FORM,
  payload: null
})

export const showJobsiteUserForm = (dispatch) => ({
  type: SHOW_JOBSITE_USER_FORM,
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
  try {
    const entity = await __UpdateJobsite()
    dispatch({
      type: UPDATE_ENTITY,
      payload: entity
    })
  } catch (error) {
    throw error
  }
}

export const updateJobsiteForm = (formValue) => ({
  type: UPDATE_JOBSITE_FORM,
  payload: formValue
})