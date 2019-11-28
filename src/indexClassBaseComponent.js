import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import * as serviceWorker from './serviceWorker';
class App extends Component {
  render() {
    return (
        <div>
          <Header username='Chandrkant Solanki'/>
          <Greating />
        </div>
      )
  }
}

class Header extends Component {
  render(props) {
    return(
      <header> Welcome! {this.props.username}</header>
    )
  }
}

class Greating extends Component {
  render() {
    const date = new Date(2019,11,26, 13)
    let hours = date.getHours();
    let timeOfDay
    if(hours<12){
      timeOfDay = 'morning'
    }else if(hours>12 && hours<17){
      timeOfDay ='afternoon'
    }else{
      timeOfDay = 'night'
    }
    return(
        <h2> Good {timeOfDay} to you, Sir of Mam.</h2>
      )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
