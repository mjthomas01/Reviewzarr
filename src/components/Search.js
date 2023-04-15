import React, { useState } from 'react';
import Product from './product';
import './search.css';

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [showToggledComponent, setShowToggledComponent] = useState(false);
  const revsss = {"str":["unable to load"]};
  const [reviews, setReviews] = useState(revsss);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: inputValue })
    };
  

    try {
      const response = await fetch('http://localhost:8000/scrape', requestOptions);
      const data = await response.json();
      console.log(data);
      setReviews(data);
      // setStatus(data.status);
    } catch (error) {
      console.error('Error:', error);
    }

    // setShowToggledComponent(true);
  };

  if (showToggledComponent) {
    return <Product />;
  }


  return (
    <div className="search-container">
      <h2 className='text1'>Analyse your Product Review</h2>
      <p className='txt2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum fuga quibusdam obcaecati tempore sint ullam harum soluta iusto incidunt.</p>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Paste your url here"
        value={inputValue} 
        onChange={handleInputChange}
        required
      />
      <button  className="search-button" type="submit" >
        Search
      </button>
      
    </form>
  </div>
  );
}

export default Search;
