import React from 'react';
import DataFetchingComponent from './components/DataFetchingComponent';
import DataPostingComponent from './components/DataPostingComponent';

const App = () => {
  return (
    <div>
      <h1>React API Integration</h1>
      <DataFetchingComponent />
      <DataPostingComponent />
    </div>
  );
};

export default App;
