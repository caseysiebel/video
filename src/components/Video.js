import React from 'react';
import { connect } from 'react-redux';

class Video extends React.Component {
  componentWillUpdate(nextProps) {
    const { local, remote } = nextProps;
    if (this.props.title === 'THEM' &&  remote) {
      this.vidElm.srcObject = remote;
    }
    if (this.props.title === 'ME' &&  local) {
      this.vidElm.srcObject = local;
    }
  }
  render() {
    return (
      <div style={{ 
        display: 'inline-block',
        width: '50%'
      }}> 
        <h1>{ this.props.title }</h1>
        <video autoPlay ref={ vidElm => this.vidElm = vidElm }>
        </video>
      </div>
    );
  }
}
      
const map_state = (state) => {
  return {
    local: state.stream.local,
    remote: state.stream.remote  
  };
}
export default connect(map_state)(Video);
