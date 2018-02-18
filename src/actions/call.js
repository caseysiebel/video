import { retrieve_call_streams, populate_remote_stream } from './stream';

export function update_call_form(id) {
  return {
    type: 'UPDATE_CALL_FORM',
    form_id: id
  }
}

export function clear_call_form() {
  return {
    type: 'CLEAR_CALL_FORM'
  }
}

export function send_call(config) {
  const { 
    peer,
    id, 
    local_stream 
  } = config;
  return (dispatch) => {
    const call = peer.call(id, local_stream);
    dispatch(handle_call(call));
    dispatch(populate_call(call));
  };
}

export function answer_call(config) {
  const { 
    call,
    local_stream 
  } = config;
  return (dispatch) => {
    call.answer(local_stream);
    dispatch(handle_call(call));
  }
}

export function handle_call(call) {
  return (dispatch) => {
    call.on('stream',
      (remote_stream) => {
        dispatch(populate_remote_stream(remote_stream));
      }, 
      (err) => console.error(err)
    );
  };
}

export function populate_call(call) {
  return {
    type: 'POPULATE_CALL',
    call
  };
}

export function submit_call_form(peer, id) {
  const config = {
    peer,
    id,
    outbound: true
  };
  return (dispatch) => {
    dispatch(clear_call_form());
    dispatch(retrieve_call_streams(config));
  }
}
