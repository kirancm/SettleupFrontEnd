

const payments = (state = {isFetching:false,items:[]},action) => {
    switch(action.type){
        case 'ADD_PAYMENT' : 
            return Object.assign({}, state, {
                items: [...state.items,action.payment]
            })
        case "REQUEST_PAYMENTS":
            return Object.assign({}, state, {
                isFetching: true
            })
        case "RECEIVE_PAYMENTS":
            return Object.assign({}, state, {
                items: action.payments,
                isFetching: false
            })
        case 'DELETE_PAYMENT' : 
            return Object.assign({}, state, {
                items: state.items.filter(element => element.id !== action.id)
            })
        default:
            return state
    }
}

export default payments;