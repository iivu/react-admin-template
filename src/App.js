import React,{Suspense,lazy} from 'react'
import './App.scss'
import {Switch, Route, Redirect} from 'react-router-dom'
import {getAuth} from '@/utils/authority'
import LoadingSpin from '@/components/LoadingSpin'

const BaseLayout = lazy(()=>import('./layout/BaseLayout'))
const LoginLayout = lazy(()=>import('./layout/LoginLayout'))

export default function App () {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpin/>}>
        <Switch>
          <Route path="/user" component={LoginLayout}/>
          <Route path="/" render={props => {
            if (getAuth()) {
              return <BaseLayout {...props}/>
            } else {
              return <Redirect to="/user/login"/>
            }
          }}/>
        </Switch>
      </Suspense>
    </div>
  )
}

