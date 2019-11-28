import React, {Component} from 'react'
import './style.css'
class App extends Component{
  constructor() {
    super()
    this.state= {
        count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // this.setState({count: this.state.count+1})
    this.setState(preState => {
      return {
        count: preState.count +1
      }
    })
  }
  render(){
    return(
      <div className="stat-count">
        <h1>{this.state.count}</h1>
        <br/>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    )
  }
}
export default App;
