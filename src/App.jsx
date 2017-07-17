import React, { Component } from 'react';
//import DevTools from 'mobx-react-devtools';
import TodoList from './TodoList';
import store from './TodoStore';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {/*this.props.appState.timer*/}
        </button>
        {/*<DevTools />*/}
        <TodoList store={store} />
      </div>
    );
  }


  //onReset = () => {
    //this.props.appState.resetTimer();
  //}
};

export default App;
