import React from "react";


function Name(props){

  let names=["anjali","sanskriti","deepak","shoiab"];

  return(
    <>
      <p>This is name property---{props.names}</p>
      <p>This is age---{props.age}</p>
      <p>This is hobby---{props.hobby}</p>
      <p>This is city---{props.city}</p>
    </>
  )
}
export default Name;