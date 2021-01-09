const {
    POPULATE_COMPANY_OPTIONS,
    RESET_SIGNUP_FORM,
    UPDATE_SIGNUP_FORM
} = require('../types')

const iState = {
    companyOptions: [],
    companyId: null,
    email: '',
    firstName: '',
    formError: {},
    lastName: '',
    password: ''
}

const SignUpReducer = (state = iState, action) => {
    switch (action.type) {
        case POPULATE_COMPANY_OPTIONS:
            return { ...state, companyOptions: action.payload }
        case RESET_SIGNUP_FORM:
            return { ...state, firstName: '', lastName: '', email: '', password: '', companyId: null }
        case UPDATE_SIGNUP_FORM:
            console.log('HIT RED updateLoginForm: ', action.payload.name, action.payload.value)
            return { ...state, [action.payload.name]: action.payload.value }
        default:
            return { ...state }
    }
}

export default SignUpReducer
