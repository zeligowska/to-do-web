import React from 'react'
import Task from './Task'

export default class Tasks extends React.Component{
	render() {
		const tasks = this.props.tasks.map(task =>
			<Task key={task.id} task={task}/>
		);
		return (
			<table>
				<tbody>
					<tr>
					    <th>ID</th>
						<th>Name</th>
						<th>Details</th>
					</tr>
					{tasks}
				</tbody>
			</table>
		)
	}
}