import { connect } from 'react-redux'
import { setMemberFilter } from '../actions'
import Filter from '../components/Filter'
 
const mapStateToProps = (state, ownProps) => ({
  member: state.memberFilter
})
 
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setMemberFilter(ownProps.member))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)