export default (state = {result : ""}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       ...state , result: action.payload
      }
     default:
      return state
    }
   }