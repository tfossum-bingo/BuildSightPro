const {
    POPULATE_COMPANY_USER_OPTIONS
} = require('../types')

const iState = {
    companyUserOptions: []
}



const CompanyReducer = (state = iState, action) => {
    switch (action.type) {
        case POPULATE_COMPANY_USER_OPTIONS:

          return { ...state, companyUserOptions: action.payload }
        default:
            return { ...state }
    }
}

export default CompanyReducer