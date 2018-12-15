import Login from './Login'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {

  }
}

const mapStateToProps = state => ({
  loginModel:state.loginModel,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)