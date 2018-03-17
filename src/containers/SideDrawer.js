import { connect } from 'react-redux';
import { deletePayment } from '../actions'
import { toggleMenuDrawer } from '../actions/uiActions'
import  PaymentList from '../components/PaymentList'


const SideDrawer = (props) => {
    return(
        <Drawer position="left" open={props.menuDrawer}>
            <ul className="menuNavigationList">
                <li>Members</li>
            </ul>
        </Drawer>
    )
}

const getMemberPayments = (payments, member) => {
    return payments.filter(payment => payment.who == member)
}

const mapStateToProps = state => ({
menuDrawer: state.app.menuDrawer
})
   
const mapDispatchToProps = dispatch => ({
})

export default connect(
mapStateToProps,
mapDispatchToProps
)(SideDrawer)