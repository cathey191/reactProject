import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing the content from ./form.js
import Form from './form.js';

class App extends Component {
	constructor(props) {
		super(props);
		// use a state if it is going to change
		this.state = {
			list: [
				{ id: 1, item: 'Apples' },
				{ id: 2, item: 'Pears' },
				{ id: 3, item: 'Bananas' }
			],
			text: 'Hello World'
		};
		this.changeText = this.changeText.bind(this);
	}

	render() {
		return (
			<div className="App">
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>
					<h3>{this.state.text}</h3>
					<ShoppingList list={this.state.list} />
					<hr />
					<Form />
					<button onClick={this.changeText}>Change State of H3</button>
				</div>
			</div>
		);
	}

	changeText(e) {
		e.preventDefault();
		// console.log('H3 will be changed');
		this.setState({ text: 'Button has been clicked' });
	}
}

class ShoppingList extends Component {
	render() {
		return (
			<div>
				<ul className="list-group text-center">
					{this.props.list.map(product => {
						return (
							<li
								key={product.id}
								product={product}
								className="list-group-item"
							>
								{product.item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
