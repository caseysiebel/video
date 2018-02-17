export function stream(state = { }, action) {
  switch (action.type){
    case 'POPULATE_LOCAL_STREAM': 
      return { 
        ...state, 
        local: action.local_stream 
      };
    case 'POPULATE_REMOTE_STREAM': 
      console.log('here')
      return {
        ...state,
        remote: action.remote_stream
      };
    default: 
      return state;
  }
} 
