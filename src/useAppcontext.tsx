import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export default useAppContext;
