import React from "react";
import useFetch from "./hook/useFetch";
import { GetBookData } from "./service/book.service";
import { Route, Routes } from "react-router-dom";
import { BookPage, DetailbookPage, HomePage, NotFoundPage } from "./page";
import { FooterComponents, NavComponents } from "./components";

const App = () => {
  const { loading, data, error } = useFetch(GetBookData, "books");

  return (
    <div className="">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/detail/:id" element={<DetailbookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
