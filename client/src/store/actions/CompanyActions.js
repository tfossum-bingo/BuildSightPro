import { __GetCompanyUsers } from '../../services/CompanyService'

import {
  POPULATE_COMPANY_USER_OPTIONS
} from '../types'


export const populateCompanyUserOptions = (companyId) => async (dispatch) => {
  console.log("HIT Act popCoUsers: ", companyId)
  try {
    const companyUsers = await __GetCompanyUsers(companyId)
    const companyUserOptions = createCompanyUserOptionsArray(companyUsers)
    dispatch({
      type: POPULATE_COMPANY_USER_OPTIONS,
      payload: companyUserOptions
    })
  } catch (error) {
    throw error
  }
}

// export const resetSignUpForm = () => ({
//   type: RESET_SIGNUP_FORM,
//   payload: null
// })

// export const updateSignUpForm = (name, value) => ({
//   type: UPDATE_SIGNUP_FORM,
//   payload: {
//     name,
//     value
//   }
// })


const createCompanyUserOptionsArray = (companyUsers) => {
  let tempCompanyUserOptions = companyUsers.map((companyUser, index) => {
    return [companyUser.id, `${companyUser.firstName} ${companyUser.lastName}`]
  })
  tempCompanyUserOptions = [[null, null], ...tempCompanyUserOptions]
  console.log("SVC companyOptions: ", tempCompanyUserOptions)
  return tempCompanyUserOptions
}