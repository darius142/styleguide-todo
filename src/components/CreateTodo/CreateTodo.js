import React from "react";
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';

/**
 * Component with form, use when need input field.
 */

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        margin: theme.spacing.unit,
        width: 320,
  },
});

export class CreateTodo extends React.Component {
     constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      

    render () {
        const {classes} = this.props;

        return (
            <form onSubmit={this.handleSubmit} >
                <Input 
                    type="text" 
                    placeholder="What do I need to do..." 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    autoFocus 
                    className={classes.input}
                    inputProps={{maxLength: 15}}
                />
                <Button 
                    variant="raised" 
                    color="secondary" 
                    type="submit" 
                    className={classes.button}>
                    Create
                    <Add className={classes.rightIcon}/>
                </Button>
            </form>
        );
    }
    handleSubmit (e) {
        this.props.createTask(this.state.value);
        this.setState({value: ''});
        e.preventDefault();
    }
}

export default withStyles(styles)(CreateTodo);

/// Comment