import React, {Component} from 'react'
function clickMe(argument) {
  console.log('clickMe function Called');
}
class App extends Component {
  render() {
    return(
        <div>
          <img src="http://www.fillmurray.com/200/100" alt='img' onMouseOver={ () => console.log('Hover!') } />
          <br/>
          <br/>
          <button onClick={clickMe}>Click Me</button>
        </div>
      )
  }
}
export default App;
