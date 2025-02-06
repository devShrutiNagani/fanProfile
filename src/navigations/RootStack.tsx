import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SystemBars} from 'react-native-edge-to-edge';

import {stackData} from '../constant/json/RouterData';
import DriverDetailsScreen from '../screens/driverDetailsScreen/DriverDetailsScreen';
import DriverListScreen from '../screens/driverListScreen/DriverListScreen';
import UserDataScreen from '../screens/userDataScreen/UserDataScreen';
import {SCREENS} from '../constant/ScreensName';
import {RootStackParamList} from 'constant/interface/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const screenComponents = {
    UserDataScreen,
    DriverDetailsScreen,
    DriverListScreen,
  };

  return (
    <>
      <SystemBars style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREENS.userDataScreen}>
          {/* Dynamically map over stackData */}
          {stackData.map(item => {
            const ScreenComponent = screenComponents[item.screenName];
            // Ensure the ScreenComponent is defined
            if (!ScreenComponent) {
              return null;
            }
            return (
              <Stack.Screen
                key={item.screenID}
                name={item.screenName as keyof RootStackParamList}
                component={ScreenComponent}
                options={{
                  headerShown: false,
                }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootStack;
