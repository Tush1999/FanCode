import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesList from "./components/movies-list";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MoviesList />} />
          <Route path=":id" element={<MoviesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
