import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {getDriverData} from '../../service/DriverDataService';
import DataContext from '../../context/DataContext';
import DriverListScreen from './DriverListScreen';
import {SCREENS} from '../../constant/ScreensName';
// import DriverListScreen from '../DriverListScreen';
// import DataContext from '../../../context/DataContext';
// import {getDriverData} from '../../../service/DriverDataService';
// import {SCREENS} from '../../../constant/ScreensName';

jest.mock('../../service/DriverDataService', () => ({
  getDriverData: jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

const mockHandleLinkPress = jest.fn();

describe('DriverListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading spinner initially', async () => {
    getDriverData.mockResolvedValueOnce({
      status: 200,
      data: {MRData: {DriverTable: {Drivers: []}}},
    });
    const {getByTestId} = render(
      <DataContext.Provider value={{handleLinkPress: mockHandleLinkPress}}>
        <DriverListScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );
    expect(getByTestId('spinner-loader')).toBeTruthy();
  });

  it('renders driver list after fetching data', async () => {
    const mockDrivers = [
      {
        driverId: '1',
        givenName: 'John',
        familyName: 'Doe',
        nationality: 'USA',
        permanentNumber: '99',
        code: 'JD',
        url: 'http://example.com',
      },
    ];
    getDriverData.mockResolvedValueOnce({
      status: 200,
      data: {MRData: {DriverTable: {Drivers: mockDrivers}}},
    });

    const {getByText} = render(
      <DataContext.Provider value={{handleLinkPress: mockHandleLinkPress}}>
        <DriverListScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => expect(getByText('John Doe')).toBeTruthy());
  });

  it('handles driver selection and navigates to details screen', async () => {
    const mockDrivers = [
      {
        driverId: '1',
        givenName: 'John',
        familyName: 'Doe',
        nationality: 'USA',
        permanentNumber: '99',
        code: 'JD',
        url: 'http://example.com',
      },
    ];
    getDriverData.mockResolvedValueOnce({
      status: 200,
      data: {MRData: {DriverTable: {Drivers: mockDrivers}}},
    });

    const {getByText} = render(
      <DataContext.Provider value={{handleLinkPress: mockHandleLinkPress}}>
        <DriverListScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => {
      const driverItem = getByText('John Doe');
      fireEvent.press(driverItem);
      expect(mockNavigation.navigate).toHaveBeenCalledWith(
        SCREENS.driverDetailsScreen,
        {driverID: '99'},
      );
    });
  });

  it('handles link press event', async () => {
    const mockDrivers = [
      {
        driverId: '1',
        givenName: 'John',
        familyName: 'Doe',
        nationality: 'USA',
        permanentNumber: '99',
        code: 'JD',
        url: 'http://example.com',
      },
    ];
    getDriverData.mockResolvedValueOnce({
      status: 200,
      data: {MRData: {DriverTable: {Drivers: mockDrivers}}},
    });

    const {getByTestId} = render(
      <DataContext.Provider value={{handleLinkPress: mockHandleLinkPress}}>
        <DriverListScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => {
      const linkButton = getByTestId('link-press-1');
      fireEvent.press(linkButton);
      expect(mockHandleLinkPress).toHaveBeenCalledWith('http://example.com');
    });
  });

  it('shows NoData component when no drivers are available', async () => {
    getDriverData.mockResolvedValueOnce({
      status: 200,
      data: {MRData: {DriverTable: {Drivers: []}}},
    });

    const {getByText} = render(
      <DataContext.Provider value={{handleLinkPress: mockHandleLinkPress}}>
        <DriverListScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => {
      expect(getByText('No Driver Data Found')).toBeTruthy(); // Update to match actual text
    });
  });
});
