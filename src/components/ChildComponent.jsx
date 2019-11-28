import React, {Component} from 'react'

class ChildComponent extends Component {
  render(props) {
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
      </div>
     )
  }
}

export default ChildComponent;
