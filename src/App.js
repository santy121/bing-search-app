import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import "./App.css";
import config from "./config";

function App() {
  const [results, setResults] = useState([]);
  let bingUrl = config.api.url;
  let bingKey = config.bing_api;
  const handleSearch = async (query) => {
    try {
      const response = await fetch(`${bingUrl}?q=${query}`, {
        headers: {
          "Ocp-Apim-Subscription-Key": bingKey,
        },
      });
      const data = await response.json();
      setResults(data.webPages.value);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="App-header">
        <SearchInput onSearch={handleSearch} />
      </div>
      <SearchResults results={results} />
    </div>
  );
}

export default App;
