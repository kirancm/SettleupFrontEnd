import { combineReducers } from 'redux'
import payments from './payments'
import memberFilter from './filter'

export default combineReducers({
    payments,
    memberFilter
})
