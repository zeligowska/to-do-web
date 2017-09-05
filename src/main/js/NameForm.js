import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        details: ''};


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
      <form className="name-form" onSubmit={this.handleSubmit}>
        <label>
          Task name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Details:
          <textarea name='details' value={this.state.details} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}