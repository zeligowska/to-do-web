import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        this.props.search(this.state.query);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input name="query" type="text" value={this.state.query} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
        )
    }
}