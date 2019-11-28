import React from 'react'

function Todoitems(props){
  return (
      <div className="todo-item">
        <input type="checkbox" checked={props.item.compleated} onChange={() => props.handelChange(props.item.id)}/>
        <label style={{ textDecoration: props.item.compleated ? 'line-through' : 'none' }}>{props.item.text}</label>
      </div>
    )
}
export default Todoitems
