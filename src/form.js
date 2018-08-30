import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="input"
							ref="newItem"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-lg btn-block">
							Add New Item
						</button>
					</div>
				</form>
			</div>
		);
	}

	onSubmit(e) {
		e.preventDefault();
		var newItem = this.refs.newItem.value.trim();
		if (!newItem) {
			alert('Please enter a new item');
			return;
		}
		this.props.addNew(newItem);
		this.refs.newItem.value = '';
	}
}

export default Form;
