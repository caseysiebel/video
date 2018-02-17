import React from 'react';

import { sendCall } from '../actions/call';

class CallForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    const inp = e.currentTarget.querySelector('input');
    const id = inp.value;
    inp.value = '';
  }
  render() {
    return (
      <form className="callForm" onSubmit={ this.submitForm } >
        <input type="text" />
        <button type="submit">Call</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendCall: () => dispatch(sendCall())
  }
}
export default CallForm;
