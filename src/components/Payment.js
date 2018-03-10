import React from 'react';
import Rupee from  'react-icons/lib/fa/inr';
import DeleteIcon from 'react-icons/lib/md/delete';


function Payment(props){
	return (
		<div className="payment col-xs-12">
			<div className="who pull-left">
				<span className="name">{props.who}</span> Paid <Rupee />{props.amount}
			</div>
			<a className="pull-right deleteIcon" onClick={props.deletePayment.bind(null,props.id)}><DeleteIcon /></a>
			<div className="description">{props.description}</div>
			<div className="towhom pull-left">To: {props.towhom}</div>
			<div className="paymentdate pull-right">{props.paymentdate}</div>
		</div>	

	)				
}

export default Payment; 

