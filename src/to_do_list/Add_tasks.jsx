import React, { useState } from "react";

function Add_tasks() {
  const [tasks, setTasks] = useState([]);
  //using useState props to reflect changes inside ui
  const [newTask, setNewTask] = useState("");
  //setting tasks to be string

  const handleAddTasks = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

const handleDeleteTask = (taskToDelete)=> {
    if(tasks.includes(taskToDelete)){
        setTasks(tasks.filter(task=> task!== taskToDelete))
    }else {
        console.log("Task Does Not Exist")
    }
}


  return (
    <div>
      <h4>To Do List</h4>
      {/* creating input field for creating task, using event listener on each user click it will add task , using useState hook , will get reflected on UI */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter Your Task"
      />

      {/* adding button to click upon */}
      <button className="add-task-btn" onClick={handleAddTasks}>
        Add
      </button>

      


      {/* creating task list , using map to iterate over each task  and finally add it to the empty task list*/}
      <ul>
        {tasks.map((task, idx) => {
          return <li key={idx}>{task} {" "}
          <button onClick= {()=> handleDeleteTask(task)}>Delete</button>
           
           
         
           
          </li>;

          
      
        })}
      </ul>
    </div>
  );
}

export default Add_tasks;
