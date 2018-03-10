import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import Plus from 'react-icons/lib/fa/plus'
import React from 'react';

export const Menu = () => 	
	<div>
		<div className="header">
		<nav className="nav row">
			<Link to="/" activeClassName="selected" className="col-xs-6">
				<span>Summary</span>
			</Link>
			<Link to="/playment-list" activeClassName="selected" className="col-xs-6">
				<span>Payments</span>
			</Link>
		</nav>
		</div>
		<div className="appPaymentButton">
				<Link to="/add-payment">
					<Plus />
				</Link>
		</div>
	</div>
	