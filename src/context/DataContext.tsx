// DataContext.tsx
import {DataContextType} from 'constant/interface/DataContext';
import {OPEN_URLS} from 'constant/TitleText';
import React, {createContext, useState, ReactNode} from 'react';
import {Alert, Linking} from 'react-native';

const defaultContext: DataContextType = {
  userData: {name: '', email: ''},
  setUserData: () => {},
  handleLinkPress: () => {},
};

const DataContext = createContext<DataContextType>(defaultContext);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({children}) => {
  const [userData, setUserData] = useState<{name: string; email: string}>({
    name: '',
    email: '',
  });

  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`${OPEN_URLS} : ${url}`);
    }
  };

  return (
    <DataContext.Provider value={{userData, setUserData, handleLinkPress}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
