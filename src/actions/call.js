import { retrieve_call_streams, populate_remote_stream } from './stream';
//import { inject_video_media } from './video';

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
  console.log('config', config)
  return (dispatch) => {
    console.log('call to id', id)
    const call = peer.call(id, local_stream);
    call.on('stream', (remote_stream) => {
      dispatch(populate_remote_stream(remote_stream));
    })
    dispatch(populate_call(call))
  };
}

export function answer_call(config) {
  const { 
    call,
    local_stream 
  } = config;
  call.answer(local_stream);
  // abstract handle stream
  console.log('answer call')
  call.on('stream',
    (remote_stream) => {
        populate_remote_stream(remote_stream);        
    }, 
    (err) => console.error(err)
  );
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

