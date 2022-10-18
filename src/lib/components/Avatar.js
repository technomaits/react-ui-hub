import React from "react";


const Avatar =(props)=>{

return(

    <img
    className="avatar"
    style={{ width: props.size, height: props.size , borderRadius:"50px",border:"0.5px solid black" }}
    src={props.url}
    alt=""
  />

);

}

export default Avatar;

