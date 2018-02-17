import React from 'react';

import { connect } from 'react-redux';

const Header = (props) => (
  <header className="App-header">
    { props.id && <h1 className="App-title">{ props.id }</h1> }
  </header>
);

const mapStateToProps = (state) => {
  return {
    id: state.peer.id
  };
};
export default connect(mapStateToProps)(Header);
