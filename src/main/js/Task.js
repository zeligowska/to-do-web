import React from "react";

export default class Task extends React.Component{

    remove(id) {
        const url = `/delete/${id}`
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            this.props.refresh();
        });
    }

	render() {
		return (
			<tr>
				<td>{this.props.task.id}</td>
				<td>{this.props.task.name}</td>
				<td>{this.props.task.details}</td>
				<td><button onClick={() => this.remove(this.props.task.id)}>X</button></td>
			</tr>
		)
	}
}