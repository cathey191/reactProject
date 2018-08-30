import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<input type="text" name="input" className="form-control" />
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-primary btn-lg btn-block">
							Add New Item
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
