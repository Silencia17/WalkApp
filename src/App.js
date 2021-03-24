import React from 'react'
import Header from './components/header'
import LoginComponent from './components/login'
import Registration from './components/registration'
import './styles.scss'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter
} from 'react-router-dom'

// import Modal from './components/modal-window'

function App ({ history }) {
  return (
    <BrowserRouter>
      <Header />
      {/*<LoginComponent />*/}
        <Switch>
          <Route history={history} path='/login' component={LoginComponent} />
          <Route history={history} path='/registration' component={Registration} />
          <Redirect from='/' to='/login'/>
          {/* <Modal /> */}
        </Switch>
    </BrowserRouter>
  )
}

export default App
