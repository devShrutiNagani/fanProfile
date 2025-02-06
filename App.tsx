import React from 'react';
import {DataProvider} from './src/context/DataContext';
import RootStack from './src/navigations/RootStack';

const App: React.FC = () => {
  return (
    <DataProvider>
      <RootStack />
    </DataProvider>
  );
};

export default App;
