import React, { Component } from 'react'
import {Route} from 'react-router-dom'

interface Props {
  
}


export default function AuthRoute(props:Props){
  return (
    <Route
    {...props}
    render={({ location }) =>
      auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  )
}

