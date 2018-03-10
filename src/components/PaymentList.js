import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import Payment from './Payment'
import { Link } from 'react-router'
import React from 'React';
import {Menu} from './Menu';

class PaymentList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			paymentList : [],
		}
	}

	componentDidMount(){
		fetch('http://localhost:4000/getPaymentList').then((response) => response.json())
		.then((responseJson) => {
			  console.log("success: " + responseJson);
			  this.setState({
				  paymentList:responseJson
			  })
		})
		.catch((error) => {
		  console.error(error);
		});
	}

	updatePaymentList = () => {
		fetch('http://localhost:4000/getPaymentList').then((response) => response.json())
      		.then((responseJson) => {
       			 console.log("success: " + responseJson);
			        this.setState({
						paymentList:responseJson
					})
      		})
      		.catch((error) => {
        		console.error(error);
      		});
	}

	handlerDeletePayment = (id) => {
		var deleteConfirm = confirm("Are you sure ??");
		if(deleteConfirm){
			fetch('http://localhost:4000/deletePayment?paymentId=' + id).then((response) => response.json())
			  .then((responseJson) => {
				 this.updatePaymentList();
			  })
			  .catch((error) => {
				console.error(error);
			  });
		}
}
render(){
	return (
		<div className="row paymentList"><Menu />
		<Menu />
		  {this.state.paymentList.map((payment, i) =>
					  <Payment key={i}
							   {...payment} 
							   deletePayment={this.handlerDeletePayment}/>	
					  )}
	  </div>
  )
} 
}  

export default PaymentList;













