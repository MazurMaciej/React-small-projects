import React from 'react';
import './App.css';
import './index.css';
import ListWrapper from '../src/components/ListWrapper/ListWrapper';
import TestComponent from '../src/components/TestComponent/TestComponent';

function App() {
  return (
    <div className="app">
      <TestComponent/>
      <ListWrapper/>
    </div>
  );
}

export default App;
