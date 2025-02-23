import React, { useState,useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const CreateTask = () => {
const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [categoty, setCategory] = useState('')

  const [newtask , setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log('task created')

      setNewTask({taskTitle,taskDescription,taskDate,categoty,asignTo ,active:false,new_task:true,completed_task:false,failed_task:false})

      const data = userData
      


      data.forEach(function(elem){
        if(asignTo == elem.firstname){
          elem.tasks.push(newtask)
          elem.task_count.newtask = elem.task_count.newtask+1
          // console.log(elem)
        }
        
      })
     
      setUserData(data)
      console.log(data)
       

      setAsignTo('')
      setCategory('')
     setTaskTitle('')
      setTaskDate('')
      setTaskDescription('')
  }
  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)

        }} className="flex flex-wrap bg-red-2 00 w-full items-start justify-between  ">
        <div className="w-1/2">
        <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
             className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
          </div>
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input 
        value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" placeholder="Make a UI design" />
          </div>

          <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Asign To</h3>
          <input 
          value={asignTo}
            onChange={(e)=>{
             setAsignTo(e.target.value)
            }}
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
          </div>
          <div>
            
          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input 
          value={categoty}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
          </div>
        </div>
          

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
              value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols={30} rows={10}></textarea>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
          </div>
          
          
        </form>
      </div>
    </div>
  )
}

export default CreateTask
