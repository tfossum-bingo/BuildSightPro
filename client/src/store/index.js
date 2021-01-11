import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CompanyReducer from './reducers/CompanyReducer'
import JobsiteReducer from './reducers/JobsiteReducer'
import SignUpReducer from './reducers/SignUpReducer'
import UserReducer from './reducers/UserReducer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    companyState: CompanyReducer,
    jobsiteState: JobsiteReducer,
    userState: UserReducer,
    signUpState: SignUpReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
