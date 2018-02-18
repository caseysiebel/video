export function call(state = {
  form_id: ''
}, action) {
  switch (action.type) {
    case 'UPDATE_CALL_FORM':
      return { 
        ...state, 
        form_id: action.form_id 
      };
    case 'CLEAR_CALL_FORM':
      return { 
        ...state, 
        form_id: '' 
      }; 
    case 'POPULATE_CALL': 
      return {
        ...state, 
        call: action.call
      };
    default: 
      return state
  }
}
