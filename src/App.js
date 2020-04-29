import React from 'react';
import Home from './component/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
