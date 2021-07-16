import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count : 0,
  }

  handleIncrement = () =>{
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () =>{
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () =>{
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const {name, count} = this.props.habit;
    console.log(`habits -> habit`, `${this.props.habit.id}`, this.props)
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
     </li>
    )

  }
}
export default Habit;