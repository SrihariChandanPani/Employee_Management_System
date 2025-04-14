import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            {/* Ensure 'exact' is added to root path */}
            <Route path="/" exact component={ListEmployeeComponent} />
            {/* Other routes */}
            <Route path="/employees" exact component={ListEmployeeComponent} />
            <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
            <Route path="/view-employee/:id" component={ViewEmployeeComponent} />
            {/* Uncomment or add the following route for updating employee */}
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent} /> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
