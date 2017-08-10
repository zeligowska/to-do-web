import React from "react";

export default class Task extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.task.id}</td>
				<td>{this.props.task.name}</td>
				<td>{this.props.task.details}</td>
			</tr>
		)
	}
}