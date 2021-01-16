import React from 'react';

export const TimezoneContext = React.createContext(null);

export const TimezoneProvider = ({children}) => {
  const [timezone, setTimezone] = React.useState("America/Los_Angeles");

  return (
      <TimezoneContext.Provider value={[timezone, setTimezone]}>
        {children}
      </TimezoneContext.Provider>);
};