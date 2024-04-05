import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/Api';

const AlbumPhotos = () => {
  const [photo, setPhoto] = useState(null); 
  const { albumId } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    fetchData(url).then(data => {
      if (data.length > 0) {
        setPhoto(data[0]);
      }
    });
  }, [albumId]);

  return (
    <div>
      {photo ? <img src={photo.url} alt={photo.title} /> : <p>Loading...</p>}
    </div>
  );  
};

export default AlbumPhotos;
