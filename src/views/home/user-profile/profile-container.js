import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ProfilePage from './profile-comp';

/**
 *
 * @module: home/user-profile 
 * @Created:  21-07-28 13:54 Wednesday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  // global state contains skinState ... ed.
  const {
    skinState: { header },
  } = state

  return {
    header,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // doSomeThing:(arg1,arg2) => (dispatch) => {
    //   ...
    //   dispatch(action);
    // },
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage)
