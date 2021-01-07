import { createStore, combineReducers, applyMiddleware } from 'redux'
import DepartmentReducer from './reducers/DepartmentReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    departmentState: DepartmentReducer
  }),
  applyMiddleware(thunk)
)

export default store
