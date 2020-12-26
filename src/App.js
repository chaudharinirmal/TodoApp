
import './App.css';
import {Helmet} from 'react-helmet';
import React,{useState} from 'react';

function App() {
  const[task,setTask] =  useState('')
  const[taskList,setTaskList] = useState([])
  

  function Addtask(){
    const value = task
    if(value !==''){
      if(taskList.length===0)
      {
        const arr =[]
        arr.push(value)
        setTask('')
        setTaskList(arr)
      }else{
        const arr = taskList
        arr.push(value)
        setTask('')
        setTaskList(arr)
      }
    }
  }


  return (
    <div className="App">
      <Helmet>
<title>StickyNotes</title>

      </Helmet>
     <h1>Today's Task</h1>
   
   
     <input placeholder="Task" type="password" value={task} onChange = {e =>setTask(e.target.value)} />
   
     <br></br>
     <button className="btn" onClick={Addtask}>Submit</button> 
     {taskList.map(res=>(<div key={res}>{res}</div>))}
      {/* {taskList.new Map(arr.map(res=>(<div key ={res}>{res}</div>)))}      */}
    </div>
  );
}

export default App;
