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
			text: 'Hello World',
			jumboClass: 'jumbotron text-center jumboDark',
			darkTheme: false,
			editID: 0,
			buttonText: 'Add New Item',
			editingValue: ''
		};
		this.changeText = this.changeText.bind(this);
		this.addNewItemToList = this.addNewItemToList.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	render() {
		return (
			<div className="App">
				<div className={this.state.jumboClass}>
					<h1 className="display-4">Shopping List</h1>
					<h3>{this.state.text}</h3>
					<ShoppingList
						list={this.state.list}
						editItem={this.handleEdit}
						deleteItem={this.handleDelete}
					/>
					<hr />
					<Form
						{...this.state}
						addNew={this.addNewItemToList}
						updatingItem={this.handleUpdate}
						changeText={this.handleChangeText}
					/>
					<button onClick={this.changeText} className="btn btn-secondary">
						Change State of H3
					</button>
				</div>
			</div>
		);
	}

	changeText(e) {
		e.preventDefault();
		// console.log('H3 will be changed');
		this.setState({
			text: 'Button has been clicked',
			darkTheme: !this.state.darkTheme
		});

		if (this.state.darkTheme === false) {
			this.setState({ jumboClass: 'jumbotron text-center' });
		} else {
			this.setState({ jumboClass: 'jumbotron text-center jumboDark' });
		}
	}

	addNewItemToList(item) {
		var newItem = {
			id: this.state.list.length + 1,
			item: item
		};

		this.setState({
			list: this.state.list.concat(newItem)
		});
	}

	handleEdit(itemToEdit) {
		this.setState({
			editID: itemToEdit.id,
			buttonText: 'Edit Item',
			editingValue: itemToEdit.item
		});
	}

	handleDelete(itemToDelete) {
		var allItems = this.state.list;
		for (var i = 0; i < allItems.length; i++) {
			if (allItems[i].id === itemToDelete.id) {
				allItems.splice(i, 1);
				break;
			}
		}
		for (var j = 0; j < allItems.length; j++) {
			allItems[j].id = j + 1;
		}
		this.setState({ list: allItems });
	}

	handleUpdate(updatedItem) {
		var allItems = this.state.list;
		for (var i = 0; i < allItems.length; i++) {
			if (allItems[i].id === updatedItem.id) {
				allItems[i].item = updatedItem.item;
				break;
			}
		}
		this.setState({
			list: allItems,
			editID: 0,
			buttonText: 'Add New Item',
			editingValue: ''
		});
	}

	handleChangeText(inputValue) {
		this.setState({
			editingValue: inputValue
		});
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
								className="list-group-item"
								role="group"
								key={product.id}
								product={product}
							>
								{product.item}
								<div>
									<button
										type="button"
										className="btn btn-outline-dark edit"
										onClick={this.edit.bind(this, product)}
									>
										Edit
									</button>
									<button
										type="button"
										className="btn btn-outline-danger  delete"
										onClick={this.delete.bind(this, product)}
									>
										Delete
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	edit(product) {
		this.props.editItem(product);
	}

	delete(product) {
		this.props.deleteItem(product);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
