import React from 'react';
import { connect } from 'react-redux';

class Video extends React.Component {
  componentWillUpdate(nextProps) {
    const { remote } = nextProps;
    if (remote) {
      this.vidElm.srcObject = remote;
    }
  }
  render() {
    return (
      <video ref={ vidElm => this.vidElm = vidElm }>
      </video>
    );
  }
}
      
const map_state = (state) => {
  return {
    remote: state.stream.remote  
  };
}
export default connect(map_state)(Video);
