import  { GET_CONTACTS_PENDING,
          GET_CONTACTS_SUCCESS,
          ADD_CONTACT_PENDING,
          ADD_CONTACT_SUCCESS,
          REMOVE_CONTACT_PENDING,
          REMOVE_CONTACT_SUCCESS,
          UPDATE_CONTACT_PENDING,
          UPDATE_CONTACT_SUCCESS
} from '../actions/contacts'

export default(state = [], action)=> {
  switch (action.type) {
    case GET_CONTACTS_PENDING:
     return state;
    case GET_CONTACTS_SUCCESS:
     return [...action.payload.data];
    case ADD_CONTACT_PENDING:
     return state;
    case ADD_CONTACT_SUCCESS:
     return [...action.payload.data];
    case REMOVE_CONTACT_PENDING:
     return state;
    case REMOVE_CONTACT_SUCCESS:
     return [...action.payload.data]
    case UPDATE_CONTACT_PENDING:
     return state;
    case UPDATE_CONTACT_SUCCESS:
     return [...action.payload.data]; 
    default:
     return state;
  }
}
