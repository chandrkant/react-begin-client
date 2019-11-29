import React, {Component} from 'react'
import CondationalComponant from './components/CondationalComponent.jsx'
class App extends Component{
  constructor() {
    super()
    this.state= {
      isLodding: true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLodding: false
      })
    },1500)
  }
  render(){
    return(
      <div>
          <CondationalComponant isLodding = {this.state.isLodding}/>
      </div>
      )
  }
}
export default App;
