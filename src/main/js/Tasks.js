import React from 'react'
import Task from './Task'

export default class Tasks extends React.Component{
	render() {
		const tasks = this.props.tasks.map(task =>
			<Task refresh={this.props.refresh} key={task.id} task={task}/>
		);
		return (
			<div>
					{tasks}
			</div>
		)
	}
}