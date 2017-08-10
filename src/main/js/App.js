import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";


export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tasks: []};
	}

	componentDidMount() {
		fetch('/tasks', {method: 'GET'})
		.then(response => {
		    return response.json();
		})
		.then(tasks => {
			this.setState({tasks});
		});
	}

	render() {
		return (
			<Tasks tasks={this.state.tasks}/>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)