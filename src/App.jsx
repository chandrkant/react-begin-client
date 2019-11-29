import React, {Component} from 'react'
import PlanetsData from './components/PlanetsData.jsx'
class App extends Component{
  constructor() {
    super()
    this.state= {
      firstName: '',
      lastName: ''
    }
    this.handelChange = this.handelChange.bind(this)
  }
  handelChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render(){
    return(
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handelChange}/>
        <br/>
        <br/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handelChange}/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
      )
  }
}
export default App;
