import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../utils/Api';

function UserAlbums() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    fetchData(url).then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      {albums.map(album => (
        <div key={album.id}>
          <h4>{album.title}</h4>
          <Link to={`/album/${album.id}/photos`}>Photos</Link>
        </div>
      ))}
    </div>
  );
}

export default UserAlbums;
