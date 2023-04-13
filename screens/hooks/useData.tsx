import React, {useCallback, useContext, useEffect, useState} from 'react';

import {COLORS, icons, values} from '../../constants';
import {sendReport,Action} from './firebaseUseData';
export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const contextValue = {
    sendReport,
    Action,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
