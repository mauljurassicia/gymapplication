import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

function ImageLoader({src, alt}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
    const img = new Image();

    setImageLoaded(false);
    img.src = src;
    img.onload = () => {
    setImageLoaded(true);
    }}, [src]);


    return (
        <div>
            {imageLoaded ? (
                <img src={src} alt={alt} loading='lazy'/> 
            ) : <Skeleton variant='rounded' animation='wave'  width={'auto'} height={326} />}
        </div>
    )
}

export default ImageLoader