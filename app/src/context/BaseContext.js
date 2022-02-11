import React, { createContext, useState, useEffect } from "react";

export const BaseContext = createContext(null);

export const BaseContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState();

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

  // CREATE DROPDOWN STATE
  const setOpenStates = () => {
    const isOpenObj = data.reduce((acc, obj) => {
      return { ...acc, [obj.id]: false };
    }, {});
    setIsOpen(isOpenObj);
  };

  useEffect(() => {
    getDataFromBE();
  }, []);

  useEffect(() => {
    if (data) setOpenStates();
  }, [data]);

  return (
    <BaseContext.Provider value={{ data }}>{children}</BaseContext.Provider>
  );
};
