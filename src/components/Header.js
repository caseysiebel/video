import React from 'react';

import { connect } from 'react-redux';

const Header = (props) => (
  <header>
    { props.id && <h1>{ props.id }</h1> }
  </header>
);

const map_state = (state) => {
  return {
    id: state.peer.id
  };
};
export default connect(map_state)(Header);
