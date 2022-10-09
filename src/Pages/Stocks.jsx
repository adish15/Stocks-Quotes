import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

function Stocks() {
  const [stocks, setStocks] = useState([]);

  function TableRow(row) {
    return (
      <Link to='/quotes' state={{symbol: row.row}} style={{textDecoration: 'none', color: 'black'}}>
      <tr>
        {row.row.map((val) => (
          <td>{val}</td>
        ))}
      </tr>
      </Link>
    );
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await axios
          .get('https://prototype.sbulltech.com/api/v2/instruments')
          .then(({ data }) => {
            var parsed = Papa.parse(data);
            return parsed.data;
          });
        setStocks(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <table style={{ width: 500 }}>
        <tbody>
          {stocks?.slice(1).map((row) => (
            <TableRow row={row} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Stocks;
