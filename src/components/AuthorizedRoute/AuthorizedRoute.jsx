import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Authorized from '@/components/Authorized'


function AuthorizedRoute ({config}) {
  return (
    <Authorized
      auth={config.auth}
      noAuth={<Route path={config.path} render={() => <Redirect to="/exception/403"/>}/>}
    >
      <Route path={config.path} component={config.component}/>
    </Authorized>
  )
}

export default AuthorizedRoute