import React from "react";
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';
import Save from 'material-ui-icons/Save';
import Cancel from 'material-ui-icons/Cancel';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Input from 'material-ui/Input';


const styles = theme => ({
    card: {
        //minWidth: 500,
        margin: theme.spacing.unit,
        paddingRight: 0,
        width: 450,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    input: {
        margin: theme.spacing.unit,
        width: 150,
    },
});

/**
 * General component, for creating list items.
 */

export class TodosListItem extends React.Component {
    constructor (props) {
        super(props);

        const { task } = this.props;

        this.state = {value: task};
        this.state = {
            isEditing: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    renderActionSection () {
        if (this.state.isEditing) {
            const {classes} = this.props;
            return (
                <div className="buttons__action">
                    <Button 
                        variant="raised" 
                        color="secondary" 
                        size="small"
                        className={classes.button} 
                        onClick={this.editTask.bind(this)}
                    >
                        Save
                        <Save 
                            className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </Button>
                    <Button 
                        variant="raised" 
                        color="primary" 
                        size="small"
                        className={classes.button} 
                        onClick={this.setEditState.bind(this, false)}
                    >
                        Cancel
                        <Cancel className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </Button>
                </div>
            );
        }
        const {classes} = this.props;
        return (
            <div className="buttons__action">
                <Button 
                    variant="raised" 
                    color="primary" 
                    size="small"
                    className={classes.button} 
                    onClick={this.setEditState.bind(this, true)}
                >
                    Edit
                    <Edit className={classNames(classes.rightIcon, classes.iconSmall)}/>
                </Button>
                <Button 
                    variant="raised" 
                    color="primary" 
                    size="small" 
                    className={classes.button} 
                    onClick={this.deleteTask.bind(this)}
                >
                    Delete
                    <Delete className={classNames(classes.rightIcon, classes.iconSmall)}/>
                </Button>
            </div>
        );
    }

    renderTask () {
        const { task } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            const {classes} = this.props;
            return (
                
                    <form onSubmit={this.editTask}>
                        <Input 
                            value={this.state.value}
                            defaultValue={task} 
                            autoFocus 
                            type="text"
                            maxLength="10"
                            onChange={this.handleChange}
                            className={classes.input}
                            inputProps={{maxLength: 15}}
                        />
                    </form>
                
            );
        }

        return (        
            <label onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</label> 
        );
    }

    render () {
        const {classes} = this.props;
        const { isCompleted } = this.props;
        return (
            <Card className={classes.card} >
                <CardContent>
                    <div className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                        {this.renderTask()}
                        {this.renderActionSection()}
                    </div>
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
        const { task } = this.props;
        this.props.editTask(this.props.id, this.state.value);
        this.setState({
            isEditing: false
        });
        this.setState({value: task});
        e.preventDefault();
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }
}

export default withStyles(styles)(TodosListItem);