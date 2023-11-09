'use client'
import React, { useState } from 'react'
// import { render } from 'react-dom'

const page = () => {
  const[title,settitle]=useState("")
  const[desc, setdesc]=useState("")
  const[maintask,setmaintask]=useState([]);

  const submithandler=(e)=>{
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    // console.log([...maintask,{title,desc}]);
  
   
  
    settitle('');
    setdesc('');
   
   

  }
const deletehandler=(i)=>{
  const copytask=[...maintask]
// console.log([...maintask])
copytask.splice(i,1);
setmaintask(copytask)
}
let renderTask=<h2>No Task Available</h2>;
{console.log('render_s',maintask.length)}


renderTask=maintask.map((t,i)=>{
  if(maintask.length!=0){

  
return <>

<li key={i}className='flex items-center justify-between '>
<div className='flex  justify-between mb-5 w-2/3'>
  <h5 className='text-xl font-semibold '>{t.title}</h5>
  <h6 className='text-lg font-medium'>{t.desc}</h6>
</div>
<button onClick={()=>{deletehandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
</li>
</> 
  }
})
  return (
    <>
    <h1 className='bg-black text-white p-6 text-5xl font-bold text-center '>Sarthak Tudo List</h1>
    <form onSubmit={submithandler}>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 '
      placeholder='Enter title here'
      value={title}
      onChange={(e)=>{
      settitle(e.target.value)
      }}

      />
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 '
      placeholder='Enter Description here'

      value={desc}
      onChange={(e)=>{
      setdesc(e.target.value)}
      }
      />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold m-5 '>Add Task</button>

   
    </form>
    <hr/>
<div className='p-8 bg-slate-200'>
  <ul>
    {renderTask}
  </ul>

</div>

    </>
  )
}

export default page

