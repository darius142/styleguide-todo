import React from "react";
import TodosListHeader from "../TodosListHeader/TodosListHeader";
import TodosListItem from "../TodosListItem/TodosListItem";

/**
 * General component, for collecting lists. Change included TodosListItem and TodosListHeader components for your purpose.
 */

export default class TodosList extends React.Component {
    renderItems () {
        return this.props.todos.map((c, index) => {
            return (
                <TodosListItem
                    key={index}
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }
    render () {
        if (!this.props.todos.length) {
            return <p className="tutorial">Create your first todo!</p>;
        }
        return (
            <div>
                {<TodosListHeader />}
                
                    {this.renderItems()}
                
            </div>
        )
    }
}
