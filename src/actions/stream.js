import { send_call } from './call';

export function populate_remote_stream(remote_stream) {
  console.log('pop remote')
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
export function get_local_stream(config) {
  return (dispatch) => {
    const constraints = {
      video: true,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(constraints) 
      .then((local_stream) => {
        dispatch(populate_local_stream(local_stream));
        config.local_stream = local_stream;
        dispatch(send_call(config));
      })
      .catch((err) => console.log(err));
  }
}
