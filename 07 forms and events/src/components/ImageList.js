import React from 'react';

const ImageList = props => {
    console.log(props.images)

    const images = props.images.map(({id, description, urls}) =>
        <img key={id} src={urls.regular}  alt={description} />);

    return (
        <div>
            {images}
        </div>
    );
}

export default ImageList;