import React from "react"

function PlanetsData(props){
  console.log(props);
  return(
    <div>
      <p>Name: {props.data.name}</p>
      <p>Diameter: {props.data.diameter}</p>
      <p>Climate: {props.data.climate}</p>
      <p>gravity: {props.data.gravity}</p>
    </div>
  )
}
export default PlanetsData
