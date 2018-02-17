import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

import { start } from '../actions/peer';

class App extends Component {
  componentWillMount() {
    this.props.start();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CallForm />
        <Video title='THEM' />
        <Video title='ME' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  start
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
