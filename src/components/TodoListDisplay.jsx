import React from 'react'

const TodoListDisplay = (props) => {

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                { props.todoList.map((eachTask, idx) =>{
                    return (
                        <tr key={idx}>
                            <td>
                            {!eachTask.isDone ? eachTask.addTask : <strike>{eachTask.addTask}</strike>}
                            </td>
                            <td><input type="checkbox" checked={eachTask.isDone} onClick={() => props.checkyBox(idx)}/></td>
                            <td><button onClick={() => props.removeItem(idx)}>Delete</button></td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    </div>
  )
}

export default TodoListDisplay