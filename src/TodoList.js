import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component{
    render(){
        return (
            <div>
                TodoList {this.props.store.todos[0]}
            </div>
        )
    }
}


export default TodoList;