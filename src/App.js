import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserAlbums from './components/UserAlbums';
import AlbumPhotos from './components/AlbumPhotos';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="user/:userId/albums" element={<UserAlbums />} />
        <Route path="album/:albumId/photos" element={<AlbumPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
