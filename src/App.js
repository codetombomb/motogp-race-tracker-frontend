import React, { useEffect, useState } from 'react';
import './App.css';
import RiderCardContainer from './Components/RiderCardContainer';

function App() {
  const [riders, setRiders] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/riders")
      .then(resp => resp.json())
      .then(data => setRiders([...data]))
  },[])

  return (
    <div className="App">
      <RiderCardContainer riders={riders} />
    </div>
  );
}

export default App;
