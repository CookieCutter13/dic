import React, { useState } from "react";
import Results from "./results";
import axios from "axios";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults]= useState(null)

    function handleResponse(response) {
      console.log(response.data[0]);
      setResults(response.data[0])

    }

  function search(event) {
    event.preventDefault();

// documentaion: https://dictionary.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
   console.log(apiUrl)
axios.get(apiUrl).then(handleResponse);
  }


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
