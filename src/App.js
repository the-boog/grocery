import React, { Component } from 'react';
import Glist from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = {
    glist: [
      {id: 1, name: "peach", complete: true},
      {id: 2, name: "ribeye", complete: true},
      {id: 3, name: "carrots", complete: true},
     ]
    };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }

    handleClick = (id) => {
      const { glist } = this.state;
      this.setState({
        glist: glist.map( todo => {
          if (todo.id === id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo
        })
      })
    }

  addItem = (name) => {
    const { glist } = this.state;
    const newItem = {name, id: this.getUniqId(), complete: false }
    this.setState({ glist: [newItem, ...glist]})
  }
  
  render() {
    const {glist} = this.state;

    return (
      <div>
        <Glist name="Shopping List" items={glist} todoClick={this.handleClick} />
        <GroceryForm addItem={this.addItem} />
      </div>

   );
  }
}

export default App;
