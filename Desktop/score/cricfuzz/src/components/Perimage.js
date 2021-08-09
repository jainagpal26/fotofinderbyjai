import React from 'react'

const Perimage = ({element}) => {
    return (
        <>
        <div className="structure">
            <img className="imgst" src={element.largeImageURL} alt=""/>
        </div>
        </>
    )
}

export default Perimage
