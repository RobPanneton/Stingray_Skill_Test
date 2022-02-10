import React, { createContext, useState, useEffect } from "react";

export const BaseContext = createContext(null);

export const BaseContextProvider = ({ children }) => {
  const [data, setData] = useState();

  const getDataFromBE = async () => {
    // FETCH DATA FROM BACK END
    try {
      const res = await fetch("/api/swimlanes");
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
      // perhaps add some error handling here
    }
  };

  useEffect(() => {
    getDataFromBE();
  }, []);

  return (
    <BaseContext.Provider value={{ data }}>{children}</BaseContext.Provider>
  );
};
