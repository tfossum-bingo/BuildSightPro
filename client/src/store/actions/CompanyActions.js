import AlphaSort from '../../utils/AlphaSort'
import { __CreateCompany,  __GetCompanyUsers } from '../../services/CompanyService'

import {
  CREATE_COMPANY,
  POPULATE_COMPANY_USER_OPTIONS
} from '../types'


export const createCompany = (formValues) => async (dispatch) => {
  try{
    const company = await __CreateCompany(formValues)
    dispatch({
      type: CREATE_COMPANY,
      payload: company
    })
  }catch(error){
    throw error
  }
}

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

const createCompanyUserOptionsArray = (companyUsers) => {
  let tempCompanyUserOptions = companyUsers.map((companyUser, index) => {
    return [companyUser.id, `${companyUser.firstName} ${companyUser.lastName}`]
  })
  tempCompanyUserOptions = preSortCompanyUsers(tempCompanyUserOptions)
  tempCompanyUserOptions = [[null, null], ...tempCompanyUserOptions]
  console.log("SVC companyOptions: ", tempCompanyUserOptions)
  return tempCompanyUserOptions
}


const preSortCompanyUsers = (userList) => {
  const theUsers = [...userList]
  theUsers.sort(function (x, y) {
    return AlphaSort(x[1], y[1])
  })
  return theUsers
}
