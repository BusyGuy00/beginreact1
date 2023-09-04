import React from "react";
function Wrapper({children}){
    const stlye = {
        border: "2px solid black",
        padding: "16px"

    }
    return(
        <div style={stlye}>
            {children}
        </div>
    )

}
export default Wrapper;