import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
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
							onChange={this.onChange}
							value={this.props.editingValue}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-lg btn-block">
							{this.props.buttonText}
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

		if (this.props.editID === 0) {
			this.props.addNew(newItem);
		} else {
			var updatingItem = {
				id: this.props.editID,
				item: newItem
			};
			this.props.updatingItem(updatingItem);
		}
		this.refs.newItem.value = '';
	}

	onChange(e) {
		this.props.changeText(e.target.value);
	}
}

export default Form;
