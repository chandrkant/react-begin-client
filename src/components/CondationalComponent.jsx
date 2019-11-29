import React from 'react'
function CondationalComponant(props){
       return(
        <div>
          <h1>Navbar</h1>
          {props.isLodding ? <h2>Lodding......</h2> : <h2>Content lode successfully.</h2>}
          <h1>Footer</h1>
        </div>
        )
}
export default CondationalComponant
