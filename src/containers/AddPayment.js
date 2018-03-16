import { PropTypes, Component } from 'react'
import {Menu} from '../components/Menu';
import { connect } from 'react-redux'
import { addPayment } from '../actions'

const members = [
	"kiran",
	"santhosh"
]

const towhommembers = [
	"kiran",
	"santhosh",
	"both"
]

class Autocomplete extends Component {
	get value() {
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}
	render() {
		return (
			<div>
				<input className="form-control" ref="inputResort"
					   type="text" 
					   list={this.props.id} />
				<datalist id={this.props.id}>
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



const AddPayment = ({dispatch}) => {
	
	let _who, _towhom, _amount, _description

	const submit = (e) => {
			e.preventDefault();
			var currentDate = new Date().toISOString().substring(0, 10);
			var d = new Date,
			currentDate = [d.getFullYear(),
						d.getMonth()+1,
						d.getDate()].join('-')+' '+
						[d.getHours(),
						d.getMinutes(),
						d.getSeconds()].join(':');

			var data = {
				"id":Math.random(1,100),
				"who":  _who.value,
				"towhom": _towhom.value,
				"amount": parseInt(_amount.value),
				"description": _description.value,
				"paymentdate" : currentDate
			}

			dispatch(addPayment(data))
		}

	return (
		<div className="addPayment">
			<Menu />
			<form onSubmit={submit} className="addPaymentForm">
				<div className="form-group">
					<label htmlFor="who">Who</label>
					<Autocomplete id="whoList" options={members}
						   		  ref={input => _who = input}/>
				</div>

				<div className="form-group">
					<label htmlFor="towhom">ToWho</label>
					<Autocomplete id="towhomList" options={towhommembers}
					   		  ref={input => _towhom = input}/>
				</div>

				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input className="form-control" id="amount" 
					   type="text" 
					   required 
					   ref={input => _amount = input}/>	   
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input className="form-control" id="description" 
					   type="text" 
					   required 
					   ref={input => _description = input}/>
				</div>

				<button className="btn btn-primary">Add Day</button>
			</form>
		</div>
	)
}


export default connect()(AddPayment)

