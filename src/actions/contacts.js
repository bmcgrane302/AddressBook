import axios from 'axios'

export const GET_CONTACTS_PENDING = 'GET_CONTACTS_PENDING'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const ADD_CONTACT_PENDING = 'ADD_CONTACT_PENDING'
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS'
export const REMOVE_CONTACT_PENDING = 'REMOVE_CONTACT_PENDING'
export const REMOVE_CONTACT_SUCCESS = 'REMOVE_CONTACT_SUCCESS'
export const UPDATE_CONTACT_PENDING = 'UPDATE_CONTACT_PENDING'
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS'


export const getContacts = () => {
  return async (dispatch) => {
    dispatch({type: GET_CONTACTS_PENDING})
    let contacts = await axios.get('http://localhost:8000/')
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: contacts
    })
  }
}

export const addContact = (newContact) => {
  return async (dispatch) => {
    dispatch({type: ADD_CONTACT_PENDING})
    let contacts = await axios.post('http://localhost:8000/', newContact)
    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: contacts
    })
  }
}

export const removeContact = (id) => {
  return async (dispatch) => {
    dispatch({type: REMOVE_CONTACT_PENDING})
    let contacts = await axios.delete(`http://localhost:8000/${id}`)
    dispatch({
      type: REMOVE_CONTACT_SUCCESS,
      payload: contacts
    })
  }
}

export const editContact = (id, updateContact) => {
  return async (dispatch) => {
    dispatch({type: UPDATE_CONTACT_PENDING})
    let contacts = await axios.patch(`http://localhost:8000/${id}`,updateContact)
    dispatch({
      type: REMOVE_CONTACT_SUCCESS,
      payload: contacts
    })
  }
}
