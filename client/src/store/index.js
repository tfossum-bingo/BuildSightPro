import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import JobsiteReducer from './reducers/JobsiteReducer'
import SpecificationReducer from './reducers/SpecificationReducer'
import UserReducer from './reducers/UserReducer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    jobsiteState: JobsiteReducer,
    userState: UserReducer,
    specificationState: SpecificationReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
