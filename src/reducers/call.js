export function peer(state = {}, action) {
  switch (action.type) {
    case 'SEND_CALL': 
      console.log('state', state)
      return { ...state, peer: action.peer };
    default: 
      return state
  }
}
