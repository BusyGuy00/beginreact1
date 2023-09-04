import React, { useState } from "react";
function Counter(){
    //useState(상태초기값)
    //--> 배열 [상태, setter함수]
    //const [number, setNumber] = useState(0)
    // const stateArray = useState(0);
    // console.log(stateArray);
    // const number = stateArray[0];
    // const setNumber = stateArray[1];
    //이 것을 한번에 받는 것이 구조 분해 할당으로 아래와 같이 작성이 가능하다
    const [number, setNumber] = useState(0)
    //let number = 1;
    const onIncrease = () => {
        //number += 1;
        setNumber(number => number+1);
        console.log("number 값은 : " + (number+1))
    }
    
    const onDecrease = () => {
        //number -= 1;
        setNumber(number => number-1);
        console.log("number 값은 : " + number)
    }
    return(
    <div>
        <h2>{number}</h2>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    )
}
export default Counter;