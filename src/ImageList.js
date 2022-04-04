import React from 'react';
import Image from './Image'
const ImageList = () => {
    return (
        <>
            <div>
                {Image.map((data) => <img src={`player-images/63706.jpg`} alt="players" />)}

            </div>
        </>
    )
}
export default ImageList;