import Peer from 'peerjs';

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
    dispatch(initializePeer(peer));
    peer.on('open', (id) => { 
      return dispatch(openConnection(id));
    })
  }
}
