import {
  __AcknowledgeSpecification,
  __CreateSpecification
} from '../../services/SpecificationService'
import { 
  // GET_ENTITIES, 
  // GET_ENTITY, 
  ACKNOWLEDGE_SPECIFICATION,
  CREATE_ENTITY
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

export const createSpecification = () => async (dispatch) => {
  try{
    const entity = await __CreateSpecification()
    dispatch({
      type: CREATE_ENTITY,
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