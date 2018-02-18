import React from 'react';
import { connect } from 'react-redux';

class Video extends React.Component {
  componentWillUpdate(next_props) {
    const { remote } = next_props;
    if (remote) {
      this.vid_elm.srcObject = remote;
    }
  }
  render() {
    return (
      <div> 
        <video muted autoPlay ref={ vid_elm => this.vid_elm = vid_elm }>
        </video>
      </div>
    );
  }
}
      
const map_state = (state) => {
  return {
    remote: state.stream.remote  
  };
}
export default connect(map_state)(Video);
