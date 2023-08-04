import React, { useState } from 'react'


const TodoListForm = (props) => {
    const [addTask, setAddTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {addTask, isDone: false};
        props.onCreate(newTask);
    }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="addTask">Add an Item</label>
            <input type="text" name="addTask" value={addTask} onChange={(e) => setAddTask(e.target.value)}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default TodoListForm