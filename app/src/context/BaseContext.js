import React, { createContext, useState, useEffect } from "react";

export const BaseContext = createContext(null);

export const BaseContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // FETCH DATA FROM BACK END
  const getDataFromBE = async () => {
    try {
      const res = await fetch("/api/swimlanes");
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  // GET DATA FROM BE WHEN APP RUNS
  useEffect(() => {
    setTimeout(() => {
      console.log("trig");
      setIsLoaded(true);
    }, 1200);
    getDataFromBE();
  }, []);

  // SET OPEN STATES ONCE WE KNOW HOW MANY CATEGORIES THERE ARE
  useEffect(() => {
    // CREATE DROPDOWN STATE
    const setOpenStates = () => {
      const initialIsOpenObj = data.reduce((acc, obj) => {
        return { ...acc, [obj.id]: false };
      }, {});
      setIsOpen(initialIsOpenObj);
    };

    // SET THE STATES
    if (data) setOpenStates();
  }, [data]);

  return (
    <BaseContext.Provider value={{ data, isOpen, setIsOpen, isLoaded }}>
      {children}
    </BaseContext.Provider>
  );
};
