import React, { useState } from 'react';
import Header from '../header/Header';
import PhotoGallery from 'react-photo-gallery';
import { getPhotos } from '../api/SStFileAPI';



function AppContainer() {
    const [isLoading, setIsLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    if (!isLoading) {
        setIsLoading(true);
        getPhotos().then(setPhotos);
        console.log("Photos: " + photos.length);
    }

    /*
          const photos = [{
                  src: 'http://placekitten.com/200/300',
                  width: 3,
                  height: 4,
              },
              {
                  src: 'http://placekitten.com/200/200',
                  width: 1,
                  height: 1,
              },
              {
                  src: 'http://placekitten.com/800/800',
                  width: 3,
                  height: 4,
              },
          ];
      */
    return (
        <>
            <Header />
            <PhotoGallery
                photos={photos}
            />
        </>
    );
}

export default AppContainer;