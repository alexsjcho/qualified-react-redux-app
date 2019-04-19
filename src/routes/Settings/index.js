import Settings from './Settings'
import { connect } from 'react-redux'
import { getCurrentStage } from './selector'

function mapStateToProps (state, ownProps) {
  return {
    stage: getCurrentStage(state, ownProps)
  }
}

export default connect(mapStateToProps)(Settings)
