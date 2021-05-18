import Navbar from './Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;
import './App.css'
import Search from './Search';
import About from './About' ;
import User from './User';

const  App=() => {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="container">
    <Switch>
    <Route exact path='/'>
    <Search />
    </Route>
    <Route exact path='/about'>
    <About />
    </Route>
     <Route exact path="/user/:id">
    <User />
    </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
