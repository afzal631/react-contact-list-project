import React, { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const first = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("http://localhost:4000/Books", requestOptions)
        .then((response) => response.json())
        .then((result) => setNews(result))
        .catch((error) => console.log("error", error));
    };
    first();
  }, []);
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      {news.map((newsItems) => (
        <h1>{newsItems.Name}</h1>
      ))}
    </div>
  );
}

export default App;
