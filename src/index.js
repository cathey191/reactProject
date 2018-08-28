import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>
				</div>
				<ul className="list-group text-center">
					<li className="list-group-item">Item</li>
					<li className="list-group-item">Item</li>
					<li className="list-group-item">Item</li>
					<li className="list-group-item">Item</li>
					<li className="list-group-item">Item</li>
				</ul>
				<hr />
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

ReactDOM.render(<App />, document.getElementById('root'));
