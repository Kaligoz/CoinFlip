import { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const CoinProvider = ({ children, defaultValue }) => {
  const [coinResult, setCoinResult] = useState(defaultValue);
  const [displayText, setDisplayText] = useState('The chance will decide');

  const value = {
    coinResult,
    setCoinResult,
    displayText,
    setDisplayText,
  };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};

export const useCoinContext = () => useContext(CoinContext);
