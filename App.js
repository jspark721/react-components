import React from 'react';
import Menu from './toggle-HOC/Menu';
import Favorite from './toggle-HOC/Favorite';

function App() {
  return (
    <div>
      <h1>Toggle Component</h1>
      <Menu />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
