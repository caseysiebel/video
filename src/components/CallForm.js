import React from 'react';
import { connect } from 'react-redux';

//import { send_call } from '../actions/call';
import { submit_call_form, update_call_form } from '../actions/call';

class CallForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.submit_call_form(this.props.peer, this.props.form_id);
  }
  handleInputChange = (e) => {
    const id = e.currentTarget.value;
    this.props.update_call_form(id);
    e.currentTarget.value = '';
  }
  render() {
    return (
      <form className="callForm" onSubmit={ this.submitForm } >
        <input type="text" value={ this.props.form_id } onChange={ this.handleInputChange }/>
        <button type="submit">Call</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    peer: state.peer.peer,
    form_id: state.call.form_id 
  }
};
const mapDispatchToProps = {
    submit_call_form,
    update_call_form
};
export default connect(mapStateToProps, mapDispatchToProps)(CallForm);
