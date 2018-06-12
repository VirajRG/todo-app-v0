import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import TodoContainer from './components/todo-container';
import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route exact path="/" component={TodoContainer} />
      </div>
      </Router>
    );
  }
}

export default App;
