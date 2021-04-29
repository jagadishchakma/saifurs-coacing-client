import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from 'react-router-dom';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddCourse from './components/Dashboard/AddCourse/AddCourse';
import Admission from './components/Dashboard/Admission/Admission';
import AdmissionList from './components/Dashboard/AdmissionList/AdmissinoList';
import Dashboard from './components/Dashboard/Dashboard';
import EnrolledList from './components/Dashboard/EnrolledList/EnrolledList';
import ManageCourse from './components/Dashboard/ManageCourse/ManageCourse';
import Profile from './components/Dashboard/Profile/Profile';
import Review from './components/Dashboard/Review/Review';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Signup from './components/Signup/Signup';

export const UserContext = createContext();
const App = () => {
  const [loggenInUser, setLoggedInUser] = useState({});
    return (
      <div>
        <UserContext.Provider value={[loggenInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/signup"><Signup/></Route>
            <PrivateRoute exact path="/dashboard"><Dashboard/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/admission/:id"><Admission/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/review"><Review/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/profile"><Profile/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/addCourse"><AddCourse/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/manageCourse"><ManageCourse/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/enrolledList"><EnrolledList/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/admissionList"><AdmissionList/></PrivateRoute>
            <PrivateRoute exact path="/dashboard/addAdmin"><AddAdmin/></PrivateRoute>
          </Switch>
        </Router>
        </UserContext.Provider>
    </div>
  );
};

export default App;