const showAddPaymentModal = (state = false,action) => {
    switch(action.type){
        case 'SHOW_ADD_PAYMENT_MODAL' : 
            return true;
        case "HIDE_ADD_PAYMENT_MODAL":
            return false;
        default:
            return state
    }
}

export default showAddPaymentModal;