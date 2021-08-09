import React from 'react'

const Text = ({Handleinput2,Handleinput1,}) => {
    return (
        <>
        <div className="text1">
        <p>Search your image</p>
        <input type="text" onChange={(e)=>Handleinput1(e.target.value)}/>
        <p>Enter No of images you want</p>
        <input type="text" onChange={(e)=>Handleinput2(e.target.value)}/>
     
        </div>
        </>
    )
}

export default Text
