import React from "react";
import TodosList from "./components/TodosList/TodosList"
import CreateTodo from "./components/CreateTodo/CreateTodo";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const todos = {
    items: [],
    lsKey: "todos",
    populate () {
        this.items = this.get();
    },
    get () {
        try {
            return JSON.parse(localStorage.getItem(this.lsKey)) || []
        } catch (e) {}
        return [];
    },
    save () {
        localStorage.setItem(this.lsKey, JSON.stringify(this.items));
    },
    toggle (id) {
        let todoItem = this.items[id];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.save();
    },
    add (obj) {
        this.items.push(obj);
        this.save();
    },
    remove (id) {
        this.items.splice(id, 1);
        this.save();
    },
    update (id, task) {
        let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
    }
};

todos.populate();


export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            todos: todos.items
        };
    }
    render () {
        return (
            <div className="todo-wrapper">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography 
                            variant="title" 
                            color="secondary" 
                        >
                        React Todo app
                        </Typography>
                    </Toolbar>
                </AppBar>
                
                <CreateTodo
                    createTask={this.createTask.bind(this)}
                />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    createTask (task) {
        task = task.trim();
        if (!task) { return; }
        todos.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    toggleTask (taskId) {
        todos.toggle(taskId);
        this.setState({ todos: this.state.todos });
    }
    editTask (taskId, task) {
        todos.update(taskId, task);
        this.setState({ todos: this.state.todos });
    }
    deleteTask (taskId) {
        todos.remove(taskId);
        this.setState({ todos: this.state.todos });
    }
}
