
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
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
    console.log(`handleIncrement ${habit.name}`)
    const habits = [...this.state.habits]; // 새로운 배열로 만들어 주는 것.
    const index =habits.indexOf(habit);
    habits[index].count++;

    // key: value가 동일하면 생략이 가능.
    // this.setState({habits: habits});
    // key에는 key값이 value에는 배열이 들아가게 된다.
    this.setState({habits});
  };
  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`)
    const habits = [...this.state.habits]; // 새로운 배열로 만들어 주는 것.
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count< 0 ? 0 : count;
    
    this.setState({habits});
   
  };
  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`)
    // const habits = [...this.state.habits]; // 새로운 배열로 만들어 주는 것.
    // const index = habits.indexOf(habit);
    // delete habits[index];

    // filter, map은 무조건 변수에 담아야 한다.
    // why? 새로운 배열이 새로 생겨서 
    // filter는 true, false를 반환하고 
    // map은 값으로 나옴. 

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}]
    this.setState({habits});
  }

  handleReset = () =>{
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits 
        habits={this.state.habits} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        />
      </>
    )
  }
}
export default App;
