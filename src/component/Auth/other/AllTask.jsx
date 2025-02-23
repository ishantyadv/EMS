import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
 
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-70 '>

<div className='border-2 border-red-500 mb-2 p-2 px-4 flex justify-between rounded '>
        <h2 className='text-lg font-medium w-1/5 bg-emerald-600'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 bg-red-600'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 bg-blue-600'>Active Task</h5> 
        <h5 className='text-lg font-medium w-1/5 bg-green-600'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5 bg-yellow-600'>Failed Task</h5>
        
      </div>
     <div className='h-[60%] overflow-auto'>
     {userData.map(function(elem,idx){
      return <div key={idx} className='border-2 border-emerald-500 mb-2 p-2 px-4 flex justify-between rounded '>
        <h2 className=' text-lg font-medium w-1/5 '>{elem.firstname}</h2>
        <h3 className=' text-lg font-medium w-1/5 text-red-600'>{elem.task_count.new_task}</h3>
        <h5 className='text-lg font-medium w-1/5 text-blue-600'>{elem.task_count.active}</h5>
        <h5 className= 'text-lg font-medium w-1/5 text-green-600'>{elem.task_count.completed_task}</h5>
        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.task_count.failed_task}</h5>
        
      </div>
    })}
     </div>
      
     
      
    </div>
  )
}

export default AllTask
