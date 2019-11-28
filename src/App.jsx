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
    this.handelChange = this.handelChange.bind(this)
  }

  handelChange(id){
    this.setState(preState => {
      const updateToDos = this.state.todos.map(item => {
        if(item.id===id){
          item.compleated = !item.compleated;
        }
        return item
      });
      return {
        todos: updateToDos
      }
    })
  }

  render(){
    const TodoitemsList = this.state.todos.map(item => <Todoitems key={item.id} item={item}
      handelChange = {this.handelChange}
      />)
    return(
        <div className="todo-list">
          {TodoitemsList}
        </div>
      )
  }
}
export default App;
