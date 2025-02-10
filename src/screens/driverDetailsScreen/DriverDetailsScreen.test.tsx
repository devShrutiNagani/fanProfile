import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';

import DriverDetailsScreen from './DriverDetailsScreen';
import DataContext from '../../context/DataContext';
import {getDriverDetails} from '../../service/DriverDataService';

// Mock navigation
const mockNavigation = {goBack: jest.fn()};
const mockRoute = {params: {driverID: '44'}};

// Mock API Service
jest.mock('../../service/DriverDataService', () => ({
  getDriverDetails: jest.fn(() => new Promise(() => {})), // Keeps loading state
}));

// Mock DataContext
const mockHandleLinkPress = jest.fn();
const mockUserData = {name: 'John Doe', email: 'john.doe@example.com'};

describe('DriverDetailsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading spinner while fetching data', async () => {
    jest.mock('../../service/DriverDataService', () => ({
      getDriverDetails: jest.fn(() => new Promise(() => {})), // Keeps loading state
    }));

    const {getAllByTestId} = render(
      <DriverDetailsScreen route={mockRoute} navigation={mockNavigation} />,
    );

    await waitFor(() => {
      expect(getAllByTestId('spinner-loader').length).toBeGreaterThan(0);
    });
  });

  it('renders driver details correctly when API returns data', async () => {
    const mockDriverData = {
      status: 200,
      data: {
        MRData: {
          StandingsTable: {
            StandingsLists: [
              {
                DriverStandings: [
                  {
                    Driver: {
                      permanentNumber: '44',
                      givenName: 'Lewis',
                      familyName: 'Hamilton',
                      dateOfBirth: '1985-01-07',
                      nationality: 'British',
                    },
                    Constructors: [
                      {
                        name: 'Mercedes',
                        constructorId: 'mercedes',
                        nationality: 'German',
                        url: 'https://www.mercedes.com',
                      },
                    ],
                    points: '350',
                  },
                ],
              },
            ],
          },
        },
      },
    };

    getDriverDetails.mockResolvedValueOnce(mockDriverData);

    const {getByText} = render(
      <DataContext.Provider
        value={{userData: mockUserData, handleLinkPress: mockHandleLinkPress}}>
        <DriverDetailsScreen route={mockRoute} navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => expect(getByText('Lewis')).toBeTruthy());
    expect(getByText('Hamilton')).toBeTruthy();
    expect(getByText('British')).toBeTruthy();
    expect(getByText('1985-01-07')).toBeTruthy();
    expect(getByText('Mercedes')).toBeTruthy();
    expect(getByText('350')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('john.doe@example.com')).toBeTruthy();
  });

  it('calls handleLinkPress when clicking on the link icon', async () => {
    const mockDriverData = {
      status: 200,
      data: {
        MRData: {
          StandingsTable: {
            StandingsLists: [
              {
                DriverStandings: [
                  {
                    Driver: {permanentNumber: '44'},
                    Constructors: [{url: 'https://www.mercedes.com'}],
                  },
                ],
              },
            ],
          },
        },
      },
    };

    getDriverDetails.mockResolvedValueOnce(mockDriverData);

    const {getByTestId} = render(
      <DataContext.Provider
        value={{userData: mockUserData, handleLinkPress: mockHandleLinkPress}}>
        <DriverDetailsScreen route={mockRoute} navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    await waitFor(() => expect(getByTestId('link-button')).toBeTruthy());

    fireEvent.press(getByTestId('link-button'));
    expect(mockHandleLinkPress).toHaveBeenCalledWith(
      'https://www.mercedes.com',
    );
  });

  it('navigates back when back button is pressed', () => {
    getDriverDetails.mockResolvedValueOnce(new Promise(() => {})); // Simulate loading

    const {getByTestId} = render(
      <DataContext.Provider
        value={{userData: mockUserData, handleLinkPress: mockHandleLinkPress}}>
        <DriverDetailsScreen route={mockRoute} navigation={mockNavigation} />
      </DataContext.Provider>,
    );

    fireEvent.press(getByTestId('back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
