import Accounts from './Accounts'
import { connect } from 'react-redux'
import { createOpportunity } from '../../store/action/alloppdash'
import { getCreatedOpportunityId } from '../../shared/selectors'

function mapStateToProps (state) {
  return {
    createdOpportunityId: getCreatedOpportunityId(state)
  }
}
const mapDispatchToProps = {
  createOpportunity
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts)
