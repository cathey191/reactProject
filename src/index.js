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
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
