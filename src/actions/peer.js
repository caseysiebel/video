import Peer from 'peerjs';

import { retrieve_call_streams } from './stream';

export function initializePeer(peer) {
  return {
    type: 'INITIALIZE_PEER',
    peer
  };
}

export function openConnection(id) {
  return {
    type: 'OPEN_CONNECTION',
    id
  };
}

export function start() {
  return (dispatch) => {
    const peer = new Peer({ key: 'lwjd5qra8257b9' });
    peer.on('open', (id) => { 
      return dispatch(openConnection(id));
    });
    peer.on('call', (call) => {
      const config = {
        call,
        peer,
        inbound: true
      };
      dispatch(retrieve_call_streams(config));
    });
    dispatch(initializePeer(peer));
  }
}
