import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {COLORS} from '../../constant/Colors';
import CustomInput from './CustomInput';

describe('CustomInput Component', () => {
  test('renders input field with placeholder', () => {
    const {getByPlaceholderText} = render(
      <CustomInput placeholder="Enter text" />,
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  test('displays label when provided', () => {
    const {getByText} = render(<CustomInput label="Username" />);
    expect(getByText('Username')).toBeTruthy();
  });

  test('calls onChangeText when text is entered', () => {
    const mockOnChangeText = jest.fn();
    const {getByPlaceholderText} = render(
      <CustomInput placeholder="Type here" onChangeText={mockOnChangeText} />,
    );
    const input = getByPlaceholderText('Type here');
    fireEvent.changeText(input, 'Hello');
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello');
  });

  test('displays error text when provided', () => {
    const {getByText} = render(<CustomInput error="Required field" />);
    expect(getByText('Required field')).toBeTruthy();
  });

  test('renders first icon if provided', () => {
    const iconSource = {uri: 'https://example.com/icon.png'};
    const {getByTestId} = render(<CustomInput firstIcon={iconSource} />);
    expect(getByTestId('first-icon')).toBeTruthy();
  });

  test('disables input when editable is false', () => {
    const {getByPlaceholderText} = render(
      <CustomInput placeholder="Disabled input" editable={false} />,
    );
    const input = getByPlaceholderText('Disabled input');
    expect(input.props.editable).toBe(false);
  });

  test('uses default placeholderTextColor when not provided', () => {
    const {getByPlaceholderText} = render(
      <CustomInput placeholder="Test input" />,
    );
    const input = getByPlaceholderText('Test input');
    expect(input.props.placeholderTextColor).toBe(COLORS.black);
  });

  test('triggers onFocus event', () => {
    const mockOnFocus = jest.fn();
    const {getByPlaceholderText} = render(
      <CustomInput placeholder="Focus me" onFocus={mockOnFocus} />,
    );
    const input = getByPlaceholderText('Focus me');
    fireEvent(input, 'focus');
    expect(mockOnFocus).toHaveBeenCalled();
  });
});
