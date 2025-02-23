import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>

    <div className='rounded-xl w-[40%] py-6 px-9 bg-red-400 ' > 
    <h2 className='text-3xl font-semibold'>{data.task_count.new_task}</h2>
    <h3 className='text-xl font-medium'>New Task</h3>
     
    </div>

    <div className='rounded-xl w-[40%] py-6 px-9 bg-blue-400 ' > 
    <h2 className='text-3xl font-semibold'>{data.task_count.completed_task}</h2>
    <h3 className='text-xl font-medium'>Completed Task</h3>
     
    </div>
    <div className='rounded-xl w-[40%] py-6 px-9 bg-green-400 ' > 
    <h2 className='text-3xl font-semibold'>{data.task_count.active}</h2>
    <h3 className='text-xl font-medium'>Accepted Task</h3>
     
    </div>
    <div className='rounded-xl w-[40%] py-6 px-9 bg-yellow-400 ' > 
    <h2 className='text-3xl font-semibold'>{data.task_count.failed_task}</h2>
    <h3 className='text-xl font-medium'>Failed Task</h3>
     
    </div>
      
    </div>
  )
}

export default TaskListNumber
