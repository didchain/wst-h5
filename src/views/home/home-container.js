import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import IndexPage from './home-comp'

/**
 *
 * @module: home
 * @Created:  21-07-28 13:45 Wednesday
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
)(IndexPage)
