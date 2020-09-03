import React from 'react';
import Text from './components/text/Text'
import CircleBig from './components/circleBig/CircleBig'
import './App.css'
import CircleList from './components/circleList/CircleList'


function App() {
  return (
    <div className="App">
      <Text/>
      <CircleBig/>
      <CircleList/>
    </div>
  );
}

export default App;
