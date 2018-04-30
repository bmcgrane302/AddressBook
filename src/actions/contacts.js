import axios from 'axios'

export const GET_CONTACTS_PENDING = 'GET_CONTACTS_PENDING'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const ADD_CONTACT_PENDING = 'ADD_CONTACT_PENDING'
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS'


export const getContacts = () => {
  return async (dispatch) => {
    dispatch({type: GET_CONTACTS_PENDING})
    let contacts = await axios.get('http://localhost:8000/people')
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}

export const addContact = (newContact) => {
  return async (dispatch) => {
    dispatch({type: ADD_CONTACT_PENDING})
    let contacts = await axios.post('http://localhost:8000/people', newContact)
    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: contacts
    })
  }
}
