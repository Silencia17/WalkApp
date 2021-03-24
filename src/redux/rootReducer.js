import update from 'immutability-helper'
import { CHANGE_STATE_PROP, CHANGE_NAME, SHOW_MODAL, HIDE_MODAL } from '../actions'

const REDUCER = 'MAIN'
const initialState = {
  value: 0,
  firstName: 'test',
  lastName: '',
  email: '',
  password: '',
  showModal: false,
  modalData: {}
}

export default (state = initialState, action) => {
  console.log(3, state)
  console.log(4, action)
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: { $set: action.state.value }
      })
    case CHANGE_NAME:
      console.log(123)
      return { ...initialState, firstName: action.value }
    case SHOW_MODAL:
      console.log(89)
      return { ...initialState, showModal: true, modalData: action.value }
    case HIDE_MODAL:
      console.log(20)
      return { ...initialState, showModal: false }
    default:
      return state
  }
}
