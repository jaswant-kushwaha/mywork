import React, { createContext, useContext, useState, useEffect } from 'react';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

const baseURL = "";


export const DataProvider = ({ children }) => {

  const [isLoading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };


  


  return (
    <DateContext.Provider value={{
      isLoading,
      startLoading,
      stopLoading,
      baseURL,
    }}>
      {children}
    </DateContext.Provider>
  );
};