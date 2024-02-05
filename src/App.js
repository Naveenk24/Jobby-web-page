import {Switch, Redirect, Route} from 'react-router-dom'
import ProtectRoute from './component/ProtectedRoute'
import Login from './component/Login'
import Home from './component/Home'
import JobItemDetails from './component/JobItemDetails'
import NotFound from './component/NotFound'
import Jobs from './component/Jobs'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectRoute exact path="/" component={Home} />
    <ProtectRoute exact path="/jobs" component={Jobs} />
    <ProtectRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
