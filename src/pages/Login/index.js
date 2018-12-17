import Login from './Login'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  loginModel:state.loginModel,
})

export default connect(
  mapStateToProps,
)(Login)