import React, {Component}from 'react'
import ChildComponent from './components/ChildComponent.jsx'
class App extends Component {
  constructor() {
    super()
    this.state ={
      answer: 'yes',
      name: 'Raman',
      age: 33
    }
  }
  render() {
    return (
      <div>
        <h1>Is state importsnt for react! {this.state.answer} </h1>
        <ChildComponent name={this.state.name} age={this.state.age}/>
      </div>
    )
   }
}
export default App;
