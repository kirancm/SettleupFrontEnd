import './Summery.scss'
import { Component } from 'react'
import Rupee from 'react-icons/lib/fa/inr'
import React from 'react';
import {Header} from './Header';
import AddPayment from '../containers/AddPayment'



function MemberSummery(props){
	return(
	<div className="payment ">
		<div className="who">
			<span className="name">{props.name}</span> Should { props.amount > 0 ? "Get" : "Pay"} <Rupee />{Math.abs(props.amount)}
		</div>
	</div>	
	)
}

class Summery extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			summery : {}
		}
	}

	componentDidMount(){
		fetch('http://localhost:4000/getSummary').then((response) => response.json())
		.then((responseJson) => {
		this.setState({
			summery:responseJson
		})
		})
		.catch((error) => {
		console.error(error);
		});
	}

	getSummary(responseJson){
		var data = {};
		var member1 = responseJson[0];
		var member2 = responseJson[1];

	 	if(parseInt(member1.amount) > parseInt(member2.amount)){
	 		data["who"] = member2.who;
	 		data["amount"] = parseInt(member1.amount) - parseInt(member2.amount); 
	 	}

	 	else{
	 		data["who"] = member1.who;
	 		data["amount"] = parseInt(member2.amount) - parseInt(member1.amount); 
       	}
       	return data;
	}

	updateSummery(){
		fetch('http://localhost:4000/getSummary').then((response) => response.json())
      		.then((responseJson) => {
		        this.setState({
					summery:responseJson
				})
      		})
      		.catch((error) => {
        		console.error(error);
      		});
	}

   

	render() {
		let members = Object.keys(this.state.summery);
		var MemberSummerys = members.map((key) => {
		    return <MemberSummery name={key} amount={this.state.summery[key]} />
		});

		return (
			<div className="summery">
				<Header />
				<AddPayment />
				{MemberSummerys}
			</div>
		)
	}
}


export default Summery;




