import fetch from 'cross-fetch';


export const setMemberFilter = (filter) => ({
    type: 'SET_MEMBER_FILTER',
    filter
})


function requestPayments() {
  return {
    type: 'REQUEST_PAYMENTS',
  }
}
 
function receivePayments(json) {
  return {
    type: 'RECEIVE_PAYMENTS',
    payments: json,
    receivedAt: Date.now()
  }
}

function requestAddPayment(){
    return {
        type: 'REQUEST_ADD_PAYMENT',
    }
}

function paymentAddedSuccess(){
    return {
        type: 'PAYMENT_ADD_SUCCESS'
    }
}

function requestDelete() {
  return {
    type: 'REQUEST_DELETE'
  }
}

function deletionDone(){
    return {
        type: 'DELETION_DONE'
    }
}


export function addPayment(payment) {
    return dispatch => {
      dispatch(requestAddPayment())
      return fetch('http://localhost:4000/addPayment', {
            method: 'POST',
            headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
            body: JSON.stringify(payment)
        })
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => dispatch(receivePayments(json), window.location = "http://localhost:3000/#/playment-list" )
        )
    }
  }

export function fetchPayments() {
    return dispatch => {
      dispatch(requestPayments())
      return fetch(`http://localhost:4000/getPaymentList`)
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => dispatch(receivePayments(json))
        )
    }
  }

  export function deletePayment(id) {
      debugger
    return dispatch => {
      dispatch(requestDelete())
      return fetch('http://localhost:4000/deletePayment?paymentId=' + id)
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => dispatch(deletionDone()), dispatch(fetchPayments())
        )
    }
  }
 
