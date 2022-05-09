import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MovieItemDetail } from "./components/Home/MovieItem/MovieItemDetail";
import { Spinner } from "./components/Spinner/Spinner";
import "./styles.scss";

function App() {
  const { isLoading } = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<MovieItemDetail />} />
        </Routes>
        {isLoading && <Spinner />}
      </BrowserRouter>
    </>
  );
}

export default App;
