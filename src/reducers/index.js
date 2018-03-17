import { combineReducers } from 'redux'
import payments from './payments'
import memberFilter from './filter'
import showAddPaymentModal from './showAddPaymentModal'
import app from './app'

export default combineReducers({
    payments,
    memberFilter,
    showAddPaymentModal,
    app
})
