import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ authenticated, children, component: Component, ...rest }) => {
  return authenticated === true ? (
    <Route {...rest} component={Component}>
    </Route>
  ) : (
      <Redirect to="/" />
    )
}
export default ProtectedRoute