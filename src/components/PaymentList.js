import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import Payment from './Payment'
import { Link } from 'react-router'
import React from 'React';
import {Menu} from './Menu';
import memberFilter from '../containers/memberFilter';


const PaymentList = ({payments,deletePayment}) => (
	<div className="row paymentList">
		<Menu />	
		  {payments.items.map((payment, i) =>
					  <Payment key={i}
							   {...payment} 
							   deletePayment = {deletePayment}/>	
					  )}
	  </div>
  )

export default PaymentList;













