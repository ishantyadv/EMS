import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => { 
    console.log(data);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  w-full py-6 px-9 mt-10'>

    {data.tasks.map((elem, idx)=>{
        {/* console.log(elem) */}
        if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.new_task){
            return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed_task){
            return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed_task){
            return <FailedTask key={idx} data={elem}/> 
        }

    })}

    
      
    </div>
  )
}

export default TaskList
