import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  UserDataScreen: undefined;
  DriverListScreen: undefined;
  DriverDetailsScreen: {driverID: string};
};

export type UserDataScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserDataScreen'>;
};

export type DriverDataListScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DriverListScreen'>;
};

export type DriverDetailsScreenNavigationProp = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'DriverDetailsScreen'
  >;
  route: RouteProp<RootStackParamList, 'DriverDetailsScreen'>;
};
