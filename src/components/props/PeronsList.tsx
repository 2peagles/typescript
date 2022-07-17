import React from 'react'

type PeronsListProps = {
    names: {
        first:string
        last:string   
     }[]
}
const PeronsList = (props:PeronsListProps) => {
  return (
    <div>
      {props.names.map(name=>{
        return(
            <h1 key={name.first}>
                {name.first} {name.last}</h1>
        )
      })}
    </div>
  )
}

export default PeronsList
