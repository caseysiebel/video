import React, { Component } from 'react';

import Header from './Header';
import CallForm from './CallForm';
import Video from './Video';

class App extends Component {
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

export default App;
