import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import PaymentList from './components/PaymentList';
import Summery from './components/Summery';
import {NewPayment} from './components/NewPayment';
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Summery}/>
		<Route path="playment-list" component={PaymentList} />
		<Route path="add-payment" component={NewPayment} />
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
)

