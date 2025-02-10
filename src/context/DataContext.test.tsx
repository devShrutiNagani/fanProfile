import React from 'react';
import {render, act} from '@testing-library/react-native';
import DataContext, {DataProvider} from '../context/DataContext';
import {Linking, Alert} from 'react-native';
import {OPEN_URLS} from '../constant/TitleText';

jest.mock('react-native', () => ({
  Linking: {
    canOpenURL: jest.fn(),
    openURL: jest.fn(),
  },
  Alert: {
    alert: jest.fn(),
  },
}));

describe('DataContext', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  it('handles link press correctly when URL is not supported', async () => {
    Linking.canOpenURL.mockResolvedValue(false);

    const TestComponent = () => {
      const {handleLinkPress} = React.useContext(DataContext);

      React.useEffect(() => {
        handleLinkPress('https://invalid-url.com');
      }, []);

      return null;
    };

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    await act(async () => {
      expect(Linking.canOpenURL).toHaveBeenCalledWith(
        'https://invalid-url.com',
      );
    });

    expect(Alert.alert).toHaveBeenCalledWith(
      `${OPEN_URLS} : https://invalid-url.com`,
    );
  });

  it('opens URL correctly when URL is supported', async () => {
    Linking.canOpenURL.mockResolvedValue(true);
    Linking.openURL.mockResolvedValue(undefined); // Mock successful opening

    const TestComponent = () => {
      const {handleLinkPress} = React.useContext(DataContext);

      React.useEffect(() => {
        handleLinkPress('https://valid-url.com');
      }, []);

      return null;
    };

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    await act(async () => {
      expect(Linking.canOpenURL).toHaveBeenCalledWith('https://valid-url.com');
    });

    expect(Linking.openURL).toHaveBeenCalledWith('https://valid-url.com');
  });
});
