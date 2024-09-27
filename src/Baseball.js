import React from "react";

function Baseball(){

  const hit=(a)=>{
    alert(a);
  }
return(
  <>
   <button onClick={()=>hit("Great! it's a home run")}>Hit the ball</button>
  </>
);
}
export default Baseball;
