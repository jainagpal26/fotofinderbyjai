import React from 'react'
import Perimage from "./Perimage"

const Image = ({data}) => {
   
    return (
      <>
      <div>
      {
          data.map((element)=>{
              return(
                <Perimage key={element.id} element={element}/>
              )
               
          })
      }
      </div>
      </>
    )
}

export default Image
