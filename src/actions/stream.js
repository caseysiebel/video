import { send_call, answer_call } from './call';

export function populate_remote_stream(remote_stream) {
  return {
    type: 'POPULATE_REMOTE_STREAM',
    remote_stream 
  };
}
export function populate_local_stream(local_stream) {
  return {
    type: 'POPULATE_LOCAL_STREAM',
    local_stream
  };
}
export function retrieve_call_streams(config) {
  return (dispatch) => {
    const constraints = {
      video: true,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(constraints) 
      .then((local_stream) => {
        dispatch(populate_local_stream(local_stream));
        config.local_stream = local_stream;
        if (config.outbound) {
          dispatch(send_call(config));
        }
        else if (config.inbound) {
          dispatch(answer_call(config));
        }
      })
      .catch((err) => console.error(err));
  }
}
