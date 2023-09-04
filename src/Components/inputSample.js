import React, { useState } from "react";
function InputSample (){
    // const [text,setText] = useState("");
    //객체 형태로 관리 하기 
    const [inputs,setInputs] = useState({
        name:"",
        nickname: ""
    });
    //구조 분해 할당
    const {name, nickname} = inputs
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            //...은 앞에 만들어둔 변수를 담아 주고 그 뒤에 바꾸고 싶은 변수를 적어서 이용이 가능 하다
            ...inputs, // 기존의 객체를 그대로 덮어 씌울 수 있다
            [name] : value //name키를 가진 값을 value로 변경
        })
    }
    const onReset = () => {
        setInputs({
            name: "",
            nickname:""
        })
    }
    return (
        <div>
            <input onChange={onChange} placeholder="이름" name="name" value={name}/>
            <input onChange={onChange} placeholder="닉네임" name="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;