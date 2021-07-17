import React, { memo } from 'react';

// class PureComponent가 있다면
// function에서는 memo가 있다.
// props의 데이터가 변경되지 않으면 업데이트를 안해줌.
const HabitAddForm = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = event => {
      event.preventDefault();

      const name = inputRef.current.value;
      name && props.onAdd(name);

      formRef.current.reset();
  }
  return (
    // 함수로 할 땐 this가 없어도 된다. 
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
    </form>
  )
});

export default HabitAddForm;