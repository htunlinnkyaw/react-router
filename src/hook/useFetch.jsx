import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((prev) => {
          return {
            loading: false,
            error: null,
            data: data,
          };
        });
      } catch (error) {
        setData((prev) => {
          return {
            loading: false,
            error: error.message,
            data: null,
          };
        });
      }
    })();
  }, []);

  return data;
};

export default useFetch;
