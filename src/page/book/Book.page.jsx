import React, { useState } from "react";
import { BookListComponents, FooterComponents } from "../../components";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";

const BookPage = () => {
  const { loading, data, error } = useFetch(GetBookData, "books");

  return (
    <div className="mx-auto h-screen max-w-[1200px]">
      <div className="mt-5 grid grid-cols-4 gap-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data.map((el) => (
              <BookListComponents key={el.id} data={el} />
            ))}
          </>
        )}
      </div>
      {loading === false && <FooterComponents />}
    </div>
  );
};

export default BookPage;
