import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.scss'
import meberPaymentList from './containers/memberPaymentList';
import Summery from './components/Summery';
import AddPayment from './containers/AddPayment';
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import { fetchPymentsIfNeeded,fetchPayments } from './actions'

window.React = React

const store = createStore(
	rootReducer,
	applyMiddleware(
	  thunkMiddleware, // lets us dispatch() functions
	  loggerMiddleware // neat middleware that logs actions
	)
  )

  store
  .dispatch(fetchPayments())
  .then(() => console.log(store.getState()))

ReactDOM.render(
	<Provider store={store}>	
		<Router history={hashHistory}>
			<Route path="/" component={Summery}/>
			<Route path="playment-list" component={meberPaymentList} />
			<Route path="*" component={Whoops404}/>
		</Router>
	</Provider>,
	document.getElementById('react-container')
)

