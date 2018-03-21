import React from "react";
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';


const styles = {
  card: {
    minWidth: 275,
    marginBottom: 30,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 30,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

/**
 * General component, for creating list items.
 */

export default class TodosListItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <td>
                    <Button variant="raised" color="secondary" onClick={this.editTask.bind(this)}>Save</Button>
                    <Button variant="raised" color="primary" className="cancel-btn" onClick={this.setEditState.bind(this, false)}>Cancel</Button>
                </td>
            );
        }
            return (
                <td>
                    <Button variant="raised" color="primary" onClick={this.setEditState.bind(this, true)}>Edit</Button>
                    <Button variant="raised" color="primary" className="delete-btn" onClick={this.deleteTask.bind(this)}>Delete</Button>
                </td>
            );
    }

    renderTask () {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }

        return (
            <td onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</td>
        );
    }

    render () {
        const { isCompleted } = this.props;
        return (
            <Card className={styles.card}>
                <CardContent>
                    <tr className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                        {this.renderTask()}
                        {this.renderActionSection()}
                    </tr>
                </CardContent>
            </Card>
        )
    }

    setEditState (isEditing) {
        this.setState({
            isEditing
        });
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    editTask (e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }
}
