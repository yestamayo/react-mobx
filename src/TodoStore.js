import React from 'react';
import { autorun, observable } from 'mobx';
 
class TodoStore{

    @observable todos = ['comprar leche', 'comprar huevos'];
    @observable  filter = '';

    /*render(){
        return <div></div>
    }*/
}

var store = window.store = new TodoStore

export default store

autorun(
    () => {
        console.log(store.filter);
        console.log(store.todos[0]);
    }
)