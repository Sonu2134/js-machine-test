import React from 'react';
import Image from './Image'
const ImageList = ({ data }) => {
    return (
        <>
            <div>
                {Image.map((data) => { <img src={`./player-images/${data.id}.jpg`} alt="players" /> })}
            </div>
        </>
    )
}
export default ImageList;