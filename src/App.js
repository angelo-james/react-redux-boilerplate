import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { toggleButtonAction } from './actions/appActions';

class App extends Component {
  render() {
    const { toggleButton, toggleButtonAction } = this.props;

    return (
      <div className="App">
        { toggleButton ? <h1>Hello World</h1> : <h1>Goodbye World</h1> }
        <button onClick={toggleButtonAction}>
          CLICKITY CLICK
        </button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  ...state.app
});

export default connect(
  mapStateToProps,
  { toggleButtonAction }
)(App);