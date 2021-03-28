import Header from './components/Header';
import Search from './components/Search';
import Country from './components/Country';
import BorderCountry from './components/BorderCountry';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Header />
      <div className="wrapper">
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/:name" exact component={Country} />
        <Route path="/:country/border/:name" exact component={(props) => <BorderCountry {...props} key={window.location.pathname}/>} />
      </Switch>
      </div>
    </Router>
  )
}
export default App;
