import React, { Component } from 'react';

class HabitAddForm extends Component {
    // react는 바로 Dom에 접근하지 않고 Dom을 만들어 연결하면 됨.
    inputRef = React.createRef();
    // input text값 초기화 방법1 
    formRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        console.log(this.inputRef.current.value);

        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);

        this.formRef.current.reset();

        // this.inputRef.current.value = ''; // input text값 초기화 방법2
    }
    render() {
      return (
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
            <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
      )
    }
  }
  export default HabitAddForm;