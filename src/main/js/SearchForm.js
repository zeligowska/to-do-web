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
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input className="form-control" placeholder="Search" name="query" type="text"
                           value={this.state.query} onChange={this.handleChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit" value="Search"><i className="fa fa-search"> </i></button>
                    </span>
                </div>
            </form>
        )
    }
}