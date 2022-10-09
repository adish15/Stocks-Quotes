import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Quotes() {
  const [symbol, setSymbol] = useState();
  const location = useLocation()

  useEffect(()=>{
    if(location.state?.symbol){
      
      async function fetchQuotes() {
        try {
          let endpoint = `https://prototype.sbulltech.com/api/v2/quotes/${location.state.symbol[0]}`
          let data = await axios
            .get(endpoint)
            .then(({ data }) => {
              return data.payload[location.state.symbol[0]];
            });
          setSymbol(data)
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchQuotes();
    }
  },[])

  return (
    <>
    <div>Quotes</div><br /><br />
    <div>
      {
        symbol?.map((element, index)=>{

          return(
            <div key={index}>
          <span key={index}>
            {index}
            <br />
            Price is {element.price}
            <br />
            Time is {element.time}
            <br />
            Valid Till {element.valid_till}
            <br />
          </span>
          <br />
          <br />
          <br />
          </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Quotes