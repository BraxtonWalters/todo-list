import React, { useState } from 'react'
import TodoListDisplay from '../components/TodoListDisplay'
import TodoListForm from '../components/TodoListForm'


const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    // create then update function after the first item is created
    const updatedList = newItem => {
        setTodoList([...todoList, newItem])
    } 

    // delete function
    const removeItem = (deleteIndex) => {
        const filteredList = todoList.filter((item, idx) => idx !== deleteIndex);
        setTodoList(filteredList);
    }

    // checkbox
    const updateItemDone = (idx) => {
        const copy = [...todoList];
        copy[idx].isDone = copy[idx].isDone ? false : true
        setTodoList(copy)
    }


  return (
    <div>
        <TodoListForm onCreate={updatedList}/>
        <TodoListDisplay
        checkyBox={updateItemDone} 
        removeItem={removeItem}
        todoList={todoList}
        />
    </div>
  )
}

export default TodoList