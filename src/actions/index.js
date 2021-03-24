export const CHANGE_STATE_PROP = '_CHANGE_STATE_PROP'
export const CHANGE_NAME = 'CHANGE_NAME'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export function changeStateProp (prop, value, reducer) {
  return dispatch => {
    dispatch({
      type: reducer.toUpperCase() + CHANGE_STATE_PROP,
      state: {
        prop: prop,
        value: value
      }
    })
  }
}
