import React, { useState, useRef, useCallback, useEffect} from 'react'

const SimpleHabit = (props) => {
    // !정말 중요
    // ** 클래스와 다르게 prop이나 state가 변경이 되면 전체가 반복이 되어짐
    // onclick에 전달한 콜백함수는 새로운 함수가 만들어지고 함수도 오브젝트 중에 하나이기 때문에 컴포넌트가 업데이트 될때 마다 계속 새롭게 만들고 새롭게 값을 계산함.
    // ?? useState는 업데이트 되어도 계속 기억하는건 왜 그런거졍??? 
    // : useState를 쓰면 리액트가 알아서 기억하고 있기 때문에 많이 호출해도 따로 저장이 되어 있기 때문에 "동일한 값을 받아옴" "메모리의 값을 저장해둠~" 

    // state를 설정하고 업데이트하는 state를 가져올 수 있다.
   const [count, setCount ] = useState(0)
    // const spanRef = React.createRef(); 매번새로운 것을 만들어줌.
    const spanRef = useRef(); // 한번만 만들고 사용. 


   const handleIncrement = useCallback(() => {
      setCount(count + 1)
   })

    useEffect(() => {
        console.log(`mounted $ updated!: ${count}`)
    }, [count]) // 두번째 인자 값이 변경되었을때만 함수가 호출되도록.

   return (
      <li className="habit">
         <span className="habit-name">Reading</span>
         <span className="habit-counter">{count}</span>
         <button className="habit-button habit-increase" onClick={handleIncrement}>
         +
         </button>
      </li>
      )
}

export default SimpleHabit;