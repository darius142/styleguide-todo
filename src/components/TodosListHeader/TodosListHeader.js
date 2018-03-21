import React from "react";
/**
 * Simple todo lists header.
 */
export default class TodosListHeader extends React.Component {
    render () {
            return (
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
            )
    }
}
