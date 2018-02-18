import React from 'react';
import { connect } from 'react-redux';

import { submit_call_form, update_call_form } from '../actions/call';

class CallForm extends React.Component {
  submit_form = (e) => {
    e.preventDefault();
    this.props.submit_call_form(this.props.peer, this.props.form_id);
  }
  handle_input_change = (e) => {
    const id = e.currentTarget.value;
    this.props.update_call_form(id);
    e.currentTarget.value = '';
  }
  render() {
    return (
      <form className="callForm" onSubmit={ this.submit_form } >
        <input type="text" value={ this.props.form_id } onChange={ this.handle_input_change }/>
        <button type="submit">Call</button>
      </form>
    );
  }
}

const map_state = (state) => {
  return {
    peer: state.peer.peer,
    form_id: state.call.form_id 
  }
};
const map_dispatch = {
    submit_call_form,
    update_call_form
};
export default connect(map_state, map_dispatch)(CallForm);
