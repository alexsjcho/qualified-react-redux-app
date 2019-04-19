import Settings from './Settings'
import { connect } from 'react-redux'
import { getCurrentStage } from './selector'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

function mapStateToProps (state, ownProps) {
  return {
    stage: getCurrentStage(state, ownProps)
  }
}

export default connect(mapStateToProps)(withImmutablePropsToJS(Settings))
