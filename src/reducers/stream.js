export function stream(state = { }, action) {
  switch (action.type){
    case 'POPULATE_LOCAL_STREAM': 
      return { ...state, local: action.local_stream }
    default: 
      return state;
  }
} 
