import React from 'react';
import { connect } from 'react-redux';

import { sendCall } from '../actions/call';
import { submitCallForm, updateCallForm } from '../actions/call';

class CallForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.submitCallForm(this.props.form_id);
  }
  handleInputChange = (e) => {
    const id = e.currentTarget.value;
    this.props.updateCallForm(id);
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
    form_id: state.call.form_id 
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendCall: () => dispatch(sendCall()),
    submitCallForm: () => dispatch(submitCallForm()),
    updateCallForm: (id) => dispatch(updateCallForm(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CallForm);
