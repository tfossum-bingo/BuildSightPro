import {
  __AcknowledgeSpecification,
  __CreateSpecification
} from '../../services/SpecificationService'
import { 
  // GET_ENTITIES, 
  // GET_ENTITY, 
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_SPECIFICATION,
  HIDE_SPECIFICATION_FORM,
  SHOW_SPECIFICATION_FORM
} from '../types'

// export const getGetSpecifications = () => async (dispatch) => {
//   try{
//     const entities = await __GetJobsites()
//     dispatch({
//       type: GET_ENTITIES,
//       payload: entities
//     })
//   }catch(error){
//     throw error
//   }
// }

// export const getGetJobsite = () => async (dispatch) => {
//   try{
//     const entity = await __GetJobsite()
//     dispatch({
//       type: GET_ENTITY,
//       payload: entity
//     })
//   }catch(error){
//     throw error
//   }
// }

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

export const acknowledgeSpecification = () => async (dispatch) => {
  try{
    const entity = await __AcknowledgeSpecification()
    dispatch({
      type: ACKNOWLEDGE_SPECIFICATION,
      payload: entity
    })
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