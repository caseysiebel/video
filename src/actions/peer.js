import Peer from 'peerjs';

import { retrieve_call_streams } from './stream';

export function initialize_peer(peer) {
  return {
    type: 'INITIALIZE_PEER',
    peer
  };
}

export function open_connection(id) {
  return {
    type: 'OPEN_CONNECTION',
    id
  };
}

export function start() {
  return (dispatch) => {
    const peer = new Peer({ key: 'lwjd5qra8257b9' });
    peer.on('open', (id) => { 
      return dispatch(open_connection(id));
    });
    peer.on('call', (call) => {
      const config = {
        call,
        peer,
        inbound: true
      };
      dispatch(retrieve_call_streams(config));
    });
    dispatch(initialize_peer(peer));
  }
}
