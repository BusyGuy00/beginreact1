import React from "react";
function User({user}){
    return(
        <div>
        {user.username} <span>({user.email})</span>
        </div>
    )
}
function UserList(){
   const users = [
        {
            id:1,
            username: "green",
            email: "green@naver.com"
        },
        {
            id:2,
            username: "blue",
            email: "blue@naver.com"
        },
        {
            id:3,
            username: "yellow",
            email: "yellow@naver.com"
        }
   ]
    return(
        // <div>
        //     <div>
        //         {users[0].username} <span>({users[0].email})</span>
        //     </div>
        //     <div>
        //         {users[1].username} <span>({users[1].email})</span>
        //     </div>
        //     <div>
        //         {users[2].username} <span>({users[2].email})</span>
        //     </div>
        // </div>
        <div>
             {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
            {/* 이렇게 점점 생략이 가능해 지는 것을 볼 수 있다. */}
            {/* 맵 돌릴떄 key값이 필요 하다. */}
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
           
        </div>
    )

}
export default UserList