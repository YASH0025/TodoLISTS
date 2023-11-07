import React, { useState } from 'react'
import Task from './Task';
import Button from 'react-bootstrap/Button'; // Example React Bootstrap component
import 'bootstrap/dist/css/bootstrap.min.css'; 


const TaskList: React.FC= () => {
 const[newTaskText, setNewTaskText ] = useState('');
 const [tasks, setTasks] = useState<string[]>([]);

 const handleAddtTask = () =>{
    if(newTaskText.trim() === '') return
    setTasks([...tasks, newTaskText]);
    setNewTaskText('')

 }
 const handleDeleteTask = (index: number)=>{
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task at the specified index
    setTasks(updatedTasks); 
    

 }
 const handleEditTask = (index:number, text:string)=>{
   const updatedTask = [...tasks];
   updatedTask[index]= text
   setTasks(updatedTask)


 }


  return (
    <div className="task-list">
      <input type="text" id=""  onChange={(e)=>setNewTaskText(e.target.value)} />
      {/* {<button onClick={handleAddtTask}> Update</button>} */}
      <Button variant="primary" onClick={handleAddtTask}>
        Update
      </Button>
      {tasks.map((text, index) => (
  <Task
    key={index}
    text={text}
    onDelete={() => handleDeleteTask(index)}
    onEdit={(newText) => handleEditTask(index, newText)}
  />
))}
    </div>
    
  )
}

export default TaskList;
