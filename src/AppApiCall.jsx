import React, {Component} from 'react'
import PlanetsData from './components/PlanetsData.jsx'
class App extends Component{
  constructor() {
    super()
    this.state= {
      isLodding: true,
      data: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/1/')
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      this.setState({
        isLodding: false,
        data: data
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.isLodding ? <h1>Lodding ....</h1> : <h2><PlanetsData data= {this.state.data}/></h2>}
      </div>
      )
  }
}
export default App;
