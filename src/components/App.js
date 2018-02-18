import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

import { initialize_peer } from '../actions/peer';

class App extends Component {
  componentWillMount() {
    console.log('____')
    this.props.initialize_peer();
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

const map_state = (state) => {
  return {};
};
const map_dispatch = { initialize_peer };
export default connect(map_state, map_dispatch)(App);
