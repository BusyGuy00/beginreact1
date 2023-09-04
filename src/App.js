import { useRef, useState } from 'react';
import './App.css';
//import Counter from './Components/Counter';
import UserList from './Components/UserList';
//import InputSample from './Components/inputSample';
//import Hello from './Hello';
//import Wrapper from './Wrapper';


// function App() { /* 컴포 넌트 (function이 붙어 있으면 함수형 컴포넌트 라고 한다) */
  // return (
    // <div className="App">
    //   <Wrapper>
    //   {/* {props를 통해 컴포넌트에게 값을 전달 }  */}
    //   {/* props값을 생략하면 ={true}로 된다.
    //   props이름만 있고 값이 없으면 true로 설정한걸로 간주한다.
    //   isSpecial={true}를 밑에와 같이 생략 가능   */}
    //   <Hello name="react" age="20" color="red" isSpecial/>
    //   <Hello name="green" age="40" color="blue"/>
    //   <Hello  age="10" color="tomato"/>
    //   </Wrapper>
    // </div>

    <div className='App'>
     {/* <Counter /> */}
     {/* <InputSample/> */}
     <UserList/>
    </div>

  // );
// }
function App() {
  const [statenum, setStateNum] = useState(1);
  const refnum = useRef(1);
  let varnum = 1;
  const nameInput = useRef();

  const addStateNum = () => {
    setStateNum(statenum+1);
    console.log(statenum);
  }
  const addRefNum = () =>{
    refnum.current = refnum.current + 1;
    console.log(refnum.current);
  }
  const addVarNum = () => {
    varnum = varnum + 1;
    console.log(varnum);
  }
  // 버튼 클릭시에 리렌더링 되어서 포커스 맞추는 방법
  const inputFocus = () => {
    nameInput.current.focus();
  }
  return (
    <div className="App">
      <UserList/>
      <div>
        <p>
          {/* ref={nameInput}으로 인해 리렌더링 후 포커스가 맞춰 진다. */}
          <input name="name" ref={nameInput}/>
          <input name="nickname" />
          <button onClick={inputFocus}>클릭하세요</button>

        </p>
        {/* state는 즉각적으로 반영 된다. */}
        <p>state : {statenum}</p>
        {/* ref는 리런데링 할때 마다 반영 된다. */}
        <p>ref : {refnum.current}</p>
        {/*varnum 은 화면에 반영되지 않을 뿐더러 리렌더링 할때 마다 값이 초기화 된다. */}
        <p>varnum : {varnum}</p>   
        <p>
          <button onClick={addStateNum}> state+1</button>
          <button onClick={addRefNum}>refnum.current+1</button>
          <button onClick={addVarNum}>varnum+1</button>
        </p>

      </div>
    </div>
  )

}

export default App;
