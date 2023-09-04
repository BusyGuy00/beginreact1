import React from "react";
// function Hello(props){
//     return(
//         <div style={{color:props.color}}>안녕하세요 {props.name}
//             <h2>{props.age}</h2>
//         </div>
//     )
// }
function Hello({color, age, name, isSpecial}){
    return(
        <div style={{color:color}}>
            {isSpecial ? <b>***</b> : null}
            안녕하세요 {name}
            <h2>{age}</h2>
        </div>
    )
}
//디폴트 props
Hello.defaultProps = {
    name: "월요일"
}
//컴포넌트 내보내기 
export default Hello;