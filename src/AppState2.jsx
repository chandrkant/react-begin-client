import React, {Component} from 'react'
class App extends Component{
  constructor(){
    super()
    this.state={
      isLoggedin: true
    }
  }
  render(){
    let text
    if(this.state.isLoggedin){
      text = 'In'
    }else{
      text = 'Out'
    }
    return(
        <div>
          <h3>You are currently logded {text}</h3>
        </div>
      )
  }
}
export default App;
