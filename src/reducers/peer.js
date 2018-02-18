export function peer(state = {}, action) {
  switch (action.type) {
    case 'POPULATE_PEER': 
      return { 
        ...state, 
        peer: action.peer 
      };
    case 'OPEN_CONNECTION':
      return { 
        ...state, 
        id: action.id 
      };
    default: 
      return state
  }
}
