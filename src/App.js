import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
