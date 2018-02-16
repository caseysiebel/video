import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

import { initializePeer } from '../actions/peer';

class App extends Component {
  componentWillMount() {
    this.props.initializePeer();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CallForm />
        <Video />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    initializePeer: () => dispatch(initializePeer())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
