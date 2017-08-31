import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";
import NameForm from "./NameForm";


export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tasks: []};
		this.refresh = this.refresh.bind(this);
	}

	componentDidMount() {
		this.refresh();
	}

	refresh() {
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
		    <div>
		        <NameForm />
		        <button onClick={this.refresh}>Refresh</button>
			    <Tasks tasks={this.state.tasks}/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)