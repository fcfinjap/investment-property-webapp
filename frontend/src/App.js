import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

import Table from './components/Table'
import './App.css';

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios('http://localhost:8000/property-api/')
      setData(response.data)
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - Metadata
        Header: "Metadata",
        // First group columns
        columns: [
          {
            Header: "ID",
            accessor: "id"
          },
          {
            Header: "Date Added",
            accessor: "added_date"
          }
        ]
      },
      {
        // second group - Property Detail
        Header: "Property Detail",
        // Second group columns
        columns: [
          {
            Header: "Address Line 1",
            accessor: "address_1"
          },
          {
            Header: "Address Line 2",
            accessor: "address_2"
          },
          {
            Header: "City",
            accessor: "city"
          },
          {
            Header: "State",
            accessor: "state"
          },
          {
            Header: "Zipcode",
            accessor: "zip_code"
          }
        ]
      },
      {
        // third group - Listing Info
        Header: "Listing Info",
        // Third group columns
        columns: [
          {
            Header: "Categories",
            accessor: "categories"
          },
          {
            Header: "List Price",
            accessor: "list_price"
          },
          {
            Header: "Source",
            accessor: "source_url"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <h1>Investment Property Watchlist</h1>
      <Table columns={columns} data={data} />
    </div>
  );
} 

export default App;
