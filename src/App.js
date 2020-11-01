import './App.css';
import { Route, Redirect, Router } from 'react-router-dom';
import Cardvalues from './components/Card/CardValues'
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        User Profile
      </header>
      <Router history={browserHistory}>
        <Route path='/user-profile'>
          <Cardvalues />
        </Route>
        <Redirect
          exact
          from="/"
          to="/user-profile"
        />
      </Router>


      <footer className="App-footer">
        Developed By: Akshara C Bhat
      </footer>
    </div>
  );
}

export default App;
