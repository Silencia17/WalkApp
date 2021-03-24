import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp, SHOW_MODAL, CHANGE_NAME } from '../../actions'
import Login from './LoginComponent'

const mapStateToProps = ({ rootReducer: { firstName } }) => {
  console.log(11, firstName)
  return {
    firstName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => dispatch({ type: CHANGE_NAME, value: name }),
    show: (data) => dispatch({ type: SHOW_MODAL, value: data })
  }
}

const indexLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default indexLoginContainer
