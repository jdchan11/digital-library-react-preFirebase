import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/styles.css';
import { Home, Library } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store'



ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}> */}
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/Library'>
          <Library></Library>
        </Route>
        {/* <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> */}


      </Switch>
    </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);