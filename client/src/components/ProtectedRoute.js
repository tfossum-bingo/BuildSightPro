import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default ({ authenticated, children, component: Component, ...rest }) => {
  console.log("Protected Authenticated: ", authenticated)
  return authenticated === true ? (
    <Route {...rest} component={Component}>
    </Route>
  ) : (
      <Redirect to="/" />
    )
}