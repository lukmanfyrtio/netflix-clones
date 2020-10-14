import React from "react";
import "./App.css";
import Row from "./Row.js";
import request from "./request.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner className="banners" />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
