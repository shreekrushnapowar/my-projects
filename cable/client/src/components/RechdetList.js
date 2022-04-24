import React from 'react'

const RechdetList = (props) => {
  return (
    <>
     <tr>
             <td scope="col">{props.count}</td>
             <td scope="col">{props.rech.userid}</td>
             <td scope="col">{props.rech.date}</td>  
             <td scope="col">{props.rech.amount}</td>
             <td scope="col">{props.rech.pack}</td>
            </tr>
    </>
  )
}

export default RechdetList