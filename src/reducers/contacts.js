import  { GET_CONTACTS_PENDING,
          GET_CONTACTS_SUCCESS
} from '../actions/contacts'

export default(state = [], action)=> {
  switch (action.type) {
    case GET_CONTACTS_PENDING:
     return state;
    case GET_CONTACTS_SUCCESS:
     return [...action.payload.data];
    default:
     return state;
  }
}
