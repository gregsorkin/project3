import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Wrapper from './components/wrapper';
import Sidebar from './components/sideBar';
import Headbar from './components/headBar';
import Corkboard from './components/corkBoard';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch'
// Import the Database.
import './App.css';
import { homedir } from 'os';

class App extends Component {
  state = {
    // users,
  }

  render() {
    const user = {
      id: 123,
      name: 'Sal',
      age: 24,
      image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg'
    }
  return(
    <Wrapper>
      <Sidebar
         id={user.id}
         key={user.id}
         name={user.name}
         age={user.age}
        image={user.image}>
      </Sidebar>
      UserTab
      <div>
        <Headbar>
          Bandwith Tape Logo
        </Headbar>
        <Corkboard>
          <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/zeromatches" component={ZeroMatches} />
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
