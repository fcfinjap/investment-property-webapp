import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

import './App.css';
import Navigation from './components/Navigation';
import PropertyTable from './components/PropertyTable'

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios('http://localhost:8000/property-api/')
      setData(response.data)
    })();
  }, []);

  return (
    <Container fluid>
      <Navigation></Navigation>
      <div className="App">
        <h1>Investment Property Watchlist</h1>
        <PropertyTable properties={data}/>
      </div>
    </Container>
  );
} 

export default App;
