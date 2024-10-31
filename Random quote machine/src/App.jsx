import React, { useState } from 'react';
function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://type.fit/api/quotes")
      const data = await response.json();
      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex])
    } fetchData();
  }, [])
  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex])
  }
  return <div style={{ background: "white", border: "20px solid black" }} className='container pt-5'>
    <div className='jumbotron'>
      <div className='card'>
        <div style={{ background: "white", color: " black", fontFamily: "cursive", fontweight: "20px" }} className='card-header'>Inspirational Quotes</div>
        <div style={{ background: "white", color: " black", fontFamily: "cursive" }} className='card-body'>
          {randomQuote ? (
            <>
              <p className='card-text'>

                {randomQuote.text}&quote;</p>
              <h5 className='card-title'>-{randomQuote.author || "No author"}</h5>


            </>
          ) : (
            <h2>Loading</h2>
          )}
          <div className='row'>
            <a href="https://www.twitter.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-twitter"></i></a>
            <button className=" btn " onClick={getNewQuote}> New Quote</button>
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
          </div>

        </div>
      </div>
    </div>
  </div >
}

export default App;
