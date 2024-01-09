import React from 'react';
import './App.css';
import Card from './Component/Card'



function App() {


  return (
    <div className='App'>
      <Card
        title='Card Title'
        imageUrl='./assets/cardImg.jpg'
        body='hii everyone'
      />
    </div>
  );
}

export default App;
