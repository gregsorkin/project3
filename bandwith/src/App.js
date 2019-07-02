import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Wrapper from './components/wrapper';
import Sidebar from './components/sideBar';
import Headbar from './components/headBar';
import Corkboard from './components/corkBoard';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ZeroMatches from './pages/ZeroMatches';
// Import the Database.
import './App.css';
import { homedir } from 'os';

class App extends Component {
  state = {
    // users,
  }

  render() {
    const user = {
      // Dummy data until DB connections are in place.
      id: 17,
      name: 'Rivers Cuomo',
      age: 37,
      image: 'https://argonautnews.com/wp-content/uploads/2014/01/3rivers.jpg'
    }
  return(
    <Wrapper>
      <Sidebar
      // View.
         id={user.id}
         key={user.id}
         name={user.name}
         age={user.age}
        image={user.image}>
      </Sidebar>
      UserTab
      <div>
        <Headbar />
        <Corkboard>
          <Router>
          <Switch>
            {/* Routing to determine the needed controller. */}
            <Route exact path="/" component={Home} />
            <Route exact path="/zeromatches" component={ZeroMatches} />
            {/* <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/matches" component={Matches} />
            <Route exact path="/survey" component={Survey} />
            <Route exact path="/usersetup" component={UserSetup} /> */}
            <Route component={NoMatch} />
          </Switch>
          </Router>
        </Corkboard>
      </div>
    </Wrapper>
  )};
}

export default App;
