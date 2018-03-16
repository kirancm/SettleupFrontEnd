import { connect } from 'react-redux';
import { deletePayment } from '../actions'
import  PaymentList from '../components/PaymentList'


const getMemberPayments = (payments, member) => {
    return payments.filter(payment => payment.who == member)
  }

  const mapStateToProps = state => ({
    payments: {
      items: state.payments.items,
      isFetching: state.payments.isFetching
    }
  })
   
  const mapDispatchToProps = dispatch => ({
    deletePayment: id => dispatch(deletePayment(id))
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaymentList)