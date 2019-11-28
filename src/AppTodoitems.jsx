import React, {Component} from 'react'
import Todoitems from './Todoitems.jsx'
import TodoitemsData from './TodoitemsData'
// function App(){
//   const TodoitemsList = TodoitemsData.map(item => <Todoitems key={item.id} item={item}/>)
//   return(
//       <div className="todo-list">
//         {TodoitemsList}
//       </div>
//     )
// }
class App extends Component{
  constructor(){
    super()
    this.state= {
      todos: TodoitemsData
    }
  }
  render(){
    const TodoitemsList = this.state.todos.map(item => <Todoitems key={item.id} item={item}/>)
    return(
        <div className="todo-list">
          {TodoitemsList}
        </div>
      )
  }
}
export default App;
