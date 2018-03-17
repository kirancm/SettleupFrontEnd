import { connect } from 'react-redux';
import { deletePayment } from '../actions'
import { toggleMenuDrawer } from '../actions/uiActions'
import  PaymentList from '../components/PaymentList'


const getMemberPayments = (payments, member) => {
    return payments.filter(payment => payment.who == member)
  }

  const mapStateToProps = state => ({
    payments: {
      items: state.payments.items,
      isFetching: state.payments.isFetching
    },
    menuDrawer: state.app.menuDrawer
  })
   
  const mapDispatchToProps = dispatch => ({
    deletePayment: id => dispatch(deletePayment(id)),
    toggleMenuDrawer: () =>  dispatch(toggleMenuDrawer())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaymentList)