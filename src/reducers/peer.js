export function peer(state = {}, action) {
  switch (action.type) {
    case 'INITIALIZE_PEER': 
      return action.peer
    default: 
      return state
  }
}
