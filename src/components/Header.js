import './Header.scss'
import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import Plus from 'react-icons/lib/fa/plus'
import React from 'react';
import Justify from 'react-icons/lib/fa/align-justify';

export const Header = (props) => 	
	<div>
		<div className="header">
		<nav className="nav row">
			<a onClick={props.onDrowClick} className="col-xs-1">
				<span><Justify /></span>
			</a>
			<Link to="/" activeClassName="selected" className="col-xs-5">
				<span>Summary</span>
			</Link>
			<Link to="/playment-list" activeClassName="selected" className="col-xs-5">
				<span>Payments</span>
			</Link>
		</nav>
		</div>
	</div>
	