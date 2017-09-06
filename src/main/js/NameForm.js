import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            details: ''
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        fetch('/newtask', {
            method: 'POST',
            body: JSON.stringify({name: this.state.name, details: this.state.details}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.refresh();
        });

        event.preventDefault();
    }

    render() {
        return (
            <form className="new-task-form" onSubmit={this.handleSubmit}>
                <div className="new-task-lines">
                    <div className="input-group">
                        <input className="form-control" placeholder="Name" name="name" type="text"
                               value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <input className="form-control" placeholder="Details" name='details' value={this.state.details}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <button className="btn btn-dark" type="submit" value="Add">
                    <i className="fa fa-plus-circle"> </i>
                </button>
            </form>
        );
    }
}