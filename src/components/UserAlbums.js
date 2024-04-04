import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserAlbums() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
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
