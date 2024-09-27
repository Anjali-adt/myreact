import './App.css';
import Counter from './Counter';
import Name from './Name';
import Cartoon from './Cartoon';
import Baseball from './Baseball';
import Goal from './Goal';

function App() {
  return (
    <>
      {/* <Counter />
      <Name names="anjali" age="26" hobby="cooking" city="indore"/>
      <Cartoon name1="shinchan" name2="jungle book" name3="lion king" name4="doremon"/> 
      <Baseball/>*/}
      <Goal isGoal={true}/>
    </>
  );
}

export default App;
