export function updateCallForm(id) {
  return {
    type: 'UPDATE_CALL_FORM',
    form_id: id
  }
}

export function clearCallForm() {
  return {
    type: 'CLEAR_CALL_FORM'
  }
}

export function sendCall(id) {
  return {
    type: 'SEND_CALL',
  }
}

export function submitCallForm(id) {
  return (dispatch) => {
    dispatch(clearCallForm());
    dispatch(sendCall());
  }
}

