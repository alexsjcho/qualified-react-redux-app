import Settings from './Settings'
import { connect } from 'react-redux'
import { getCurrentStage, getSettings } from './selector'
import { submitStage } from '../../store/action/settings'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const mapDispatchToProps = {
  submitStage
}

function mapStateToProps (state, ownProps) {
  return {
    stage: getCurrentStage(state, ownProps),
    settings: getSettings(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(Settings))
