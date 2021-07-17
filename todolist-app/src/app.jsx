
import React, { Component } from 'react';
import './app.css';
// import Habit from './components/habit';
import SimpleHabit from './components/simpleHabit';
import Navbar from './components/navbar';

class App extends Component {
  state ={
    habits : [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'coding', count: 0},
    ]
  }
  
  handleIncrement = (habit) => {
    // 변화하는 오브젝트를 따로 빼서 전달.
    // 다시 새로운 오브젝트를 만드는것이 더 좋다.
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count +1 }
      } 
      return item;
    })
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count -1 ;
        return {...habit, count: count < 0 ? 0 : count }
      } 
      return item;
    })
    this.setState({ habits });
   
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };
  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}]
    this.setState({habits});
  }
  handleReset = () =>{
    const habits = this.state.habits.map(habit => {
      // return {...habit, count : 0 }; //전부다 업데이트 된다.
      if (habit.count !== 0 ) {
        return {...habit, count : 0 };
      }
      return habit;
    });
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        {/* <Habit 
        habits={this.state.habits} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        /> */}
        <SimpleHabit />
      </>
    )
  }
}
export default App
