import Peer from 'peerjs';

export function initializePeer() {
  return {
    type: 'INITIALIZE_PEER',
    peer: new Peer({ key: 'lwjd5qra8257b9' })
  };
}
