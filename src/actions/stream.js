export function populate_local_stream(local_stream) {
  return {
    type: 'POPULATE_LOCAL_STREAM',
    local_stream
  };
}
export function get_local_stream() {
  return (dispatch) => {
    const constraints = {
      video: true,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(constraints) 
      .then((local_stream) => dispatch(populate_local_stream(local_stream)))
      .catch((err) => console.log(err));
  }
}
