import React from 'react';
import Header from '../header/Header';
import PhotoGallery from 'react-photo-gallery';
//import { getPhotos } from '../api/SStFileAPI';
//const [photos, setPhotos] = useState([]);


function AppContainer() {
/*    const [isUploading] = useState(false);
    useEffect(() => {
        if (!isUploading)
            getPhotos().then(setPhotos);
    }, [isUploading]);
*/
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