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
                <div className="tasks">
                <li className="list-group-item list-group-item-dark">
                    <button onClick={() => this.remove(this.props.task.id)} className="btn btn-dark">
                        <i className="fa fa-trash"> </i>
                    </button>
                    <div>
                        {this.props.task.name}
                    </div>
                </li>
                </div>
                <li className="list-group-item list-group-item-light">{this.props.task.details}</li>
            </ul>
        )
    }
}