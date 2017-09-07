import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";
import NameForm from "./NameForm";
import SearchForm from "./SearchForm";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.refresh = this.refresh.bind(this);
        this.search = this.search.bind(this);
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

    search(query) {
        const url = `/search?query=${query}`;
        fetch(url, {method: 'GET'})
            .then(response => {
                return response.json();
            })
            .then(tasks => {
                this.setState({tasks});
            });
    }

    render() {
        return (
            <div className="container app">
                <button type="button" className="btn btn-light title-button" onClick={this.refresh}>ToDo</button>
                <NameForm refresh={this.refresh}/>
                <SearchForm search={this.search}/>
                <Tasks refresh={this.refresh} tasks={this.state.tasks}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);