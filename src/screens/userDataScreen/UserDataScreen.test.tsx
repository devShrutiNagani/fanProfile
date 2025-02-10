import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import DataContext from '../../context/DataContext';
import {staticUserData} from '../../constant/json/UserData';
import UserDataScreen from './UserDataScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    replace: jest.fn(),
  }),
}));

const validUserData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

describe('UserDataScreen', () => {
  const mockNavigation = {replace: jest.fn()};
  const mockSetUserData = jest.fn();

  const renderComponent = (userData = {}) => {
    return render(
      <DataContext.Provider value={{userData, setUserData: mockSetUserData}}>
        <UserDataScreen navigation={mockNavigation} />
      </DataContext.Provider>,
    );
  };

  it('renders the screen correctly', () => {
    const {getByTestId} = renderComponent();
    expect(getByTestId('user-image')).toBeTruthy();
  });

  it('renders the input fields correctly', () => {
    const {getByPlaceholderText} = renderComponent();
    staticUserData.forEach(item => {
      expect(getByPlaceholderText(item.placeholder)).toBeTruthy();
    });
  });

  it('updates user data on text input change', () => {
    const {getByPlaceholderText} = renderComponent();
    const input = getByPlaceholderText(staticUserData[0].placeholder);
    fireEvent.changeText(input, 'Test User');
    expect(mockSetUserData).toHaveBeenCalledWith(
      expect.objectContaining({
        [staticUserData[0].fieldName]: 'Test User',
      }),
    );
  });

  it('validates input and shows error messages when invalid', async () => {
    const {getByText, getByTestId} = renderComponent();

    fireEvent.press(getByTestId('custom-button'));

    await waitFor(() => {
      expect(getByText('Please Enter Name')).toBeTruthy();
      expect(getByText('Please Enter Email')).toBeTruthy();
    });
  });
  it('navigates to DriverListScreen on valid input', async () => {
    const {getByTestId} = renderComponent(validUserData, {
      navigation: mockNavigation,
    });

    fireEvent.press(getByTestId('custom-button'));

    await waitFor(() => {
      expect(mockNavigation.replace).toHaveBeenCalledWith('DriverListScreen');
    });
  });
});
