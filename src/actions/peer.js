import Peer from 'peerjs';

import { retrieve_call_streams } from './stream';

export function populate_peer(peer) {
  return {
    type: 'POPULATE_PEER',
    peer
  };
}

export function open_connection(id) {
  return {
    type: 'OPEN_CONNECTION',
    id
  };
}

export function initialize_peer() {
  return (dispatch) => {
    const peer = new Peer({ key: 'a62hi39sol4k7qfr' });
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
    dispatch(populate_peer(peer));
  }
}
