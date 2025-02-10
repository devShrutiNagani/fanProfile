import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {COLORS} from '../../constant/Colors';
import CustomButton from './CustomButton';

describe('CustomButton Component', () => {
  test('renders correctly with a title', () => {
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={() => {}} />,
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  test('calls onPress function when clicked', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomButton title="Press Me" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Press Me'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('renders loading indicator when title is "isLoading"', () => {
    const {getByTestId} = render(<CustomButton title="isLoading" />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
  test('disables button when disabled prop is true', () => {
    const {getByTestId} = render(
      <CustomButton title="Disabled" disabled={true} />,
    );
    const button = getByTestId('custom-button');

    expect(button).toHaveProp('accessibilityState', {disabled: true});
  });

  test('renders correct styles for different variants', () => {
    const {getByText, rerender} = render(
      <CustomButton title="Small" variant="smallContain" />,
    );

    expect(getByText('Small')).toBeTruthy();

    rerender(<CustomButton title="Large" variant="largeContain" />);
    expect(getByText('Large')).toBeTruthy();
  });

  test('uses default loading color when isLoadingColor is not provided', () => {
    const {getByTestId} = render(<CustomButton title="isLoading" />);
    expect(getByTestId('loading-indicator').props.color).toBe(COLORS.theme);
  });

  test('uses custom loading color when isLoadingColor is provided', () => {
    const {getByTestId} = render(
      <CustomButton title="isLoading" isLoadingColor="red" />,
    );
    expect(getByTestId('loading-indicator').props.color).toBe('red');
  });
});
