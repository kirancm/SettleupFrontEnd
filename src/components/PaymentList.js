import './PaymentList.scss'
import Payment from './Payment'
import { Link } from 'react-router'
import React from 'React';
import {Header} from './Header';
import AddPayment from '../containers/AddPayment'
import memberFilter from '../containers/memberFilter';
import Spinner from './common/Spinner'
import Drawer from './common/Drawer'


const PaymentList = ({payments,deletePayment,menuDrawer,toggleMenuDrawer}) => (
	<div>
		<Header onDrowClick={toggleMenuDrawer}/>
		<Drawer position="left" open={menuDrawer}>
			<ul className="menuNavigationList">
				<li>Members</li>
			</ul>
		</Drawer>
		<div className="row paymentList">
		<AddPayment />
		{payments.isFetching? <div className='paymentList_Loading'><Spinner /></div>:null}
		{payments.items.map((payment, i) =>
			<Payment key={i}
					{...payment} 
					deletePayment = {deletePayment}/>	
			)}	
	  </div>
	</div>
	
  )

export default PaymentList;













