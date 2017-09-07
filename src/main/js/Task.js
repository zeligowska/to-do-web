import React from "react";

export default class Task extends React.Component {

    remove(id) {
        const url = `/delete/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            this.props.refresh();
        });
    }

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark tasks">
                    <button onClick={() => this.remove(this.props.task.id)} className="remove-button btn btn-dark">
                        <i className="fa fa-trash"> </i>
                    </button>
                    <div className="task-name">
                        {this.props.task.name}
                    </div>
                </li>
                <li className="list-group-item list-group-item-light">{this.props.task.details}</li>
            </ul>
        )
    }
}