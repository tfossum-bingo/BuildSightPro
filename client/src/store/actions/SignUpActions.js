import { __CreateUser } from '../../services/UserService'
import { __GetCompanies } from '../../services/CompanyService'

import {
    POPULATE_COMPANY_OPTIONS,
    UPDATE_SIGNUP_FORM,
    RESET_SIGNUP_FORM
} from '../types'


export const populateCompanyOptions = () => async (dispatch) => {

    try{
        const companies = await __GetCompanies()
        const companyOptions = createCompanyOptionsArray(companies)
        dispatch({
          type: POPULATE_COMPANY_OPTIONS,
          payload: companyOptions
        })
      }catch(error){
        throw error
      }
}

export const resetSignUpForm = () => ({
    type: RESET_SIGNUP_FORM,
    payload: null
})

export const updateSignUpForm = (name, value) => ({
    type: UPDATE_SIGNUP_FORM,
    payload: {
        name,
        value
    }
})


const createCompanyOptionsArray = (companies) => {
      let companyOptions = companies.map((company, index) => {
        return [company.id, company.name]
      })
      companyOptions = [[null,null], ...companyOptions]
      console.log("SVC companyOptions: ", companyOptions)
      return companyOptions
  }