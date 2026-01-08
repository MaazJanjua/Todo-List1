import React from 'react'

const TodosContent = () => {
const handleEdit=()=>{}
const handleDel=()=>{}

  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">

      <div className=' flex flex-col justify-center items-center text-violet-800'>
        <div className="addTodo flex flex-col items-center space-y-4">
          <h2 className='text-[1.2vw] font-extrabold uppercase'>Add a Todo</h2>
          <div>
            <input type="text" className='bg-slate-300 h-[3vh] w-[21vw] ' />
            <button className='uppercase w-[5vw] h-[3vh] rounded-lg bg-violet-800 hover:bg-violet-950 text-white' >Add</button>
          </div>
        </div>
        <h1 className='text-4xl font-extrabold uppercase py-3'>Your Todos</h1>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button onClick={handleEdit} className='uppercase w-[3vw] h-[3vh] rounded-lg bg-violet-800 hover:bg-violet-950 text-white mx-[.1vw]'>Edit</button>
              <button onClick={handleDel} className='uppercase w-[3vw] h-[3vh] rounded-lg bg-violet-800 hover:bg-violet-950 text-white mx-[.1vw]'>Del</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TodosContent
