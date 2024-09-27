import React from "react";

function Goal(props){
  
    const isGoal=props.isGoal;
    if(isGoal){
      return<MadeGoal/>;
    }
    return<MissedGoal/>;
}
function MadeGoal(){
  return(
    <>
      <p>Great! you made a goal</p>
    </>
  )
}
function MissedGoal(){
  return(
    <>
      <p>Oh! you lose a goal</p>
    </>
  )
}
export default Goal;