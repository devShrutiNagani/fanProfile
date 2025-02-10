import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomHeader from './CustomHeader';
import {Text} from 'react-native';

describe('CustomHeader Component', () => {
  it('renders the title correctly', () => {
    const {getByText} = render(<CustomHeader title="Test Header" />);
    expect(getByText('Test Header')).toBeTruthy();
  });

  it('renders the first icon when provided', () => {
    const {getByTestId} = render(
      <CustomHeader firstIcon={{uri: 'test-icon'}} />,
    );
    expect(getByTestId('first-icon')).toBeTruthy();
  });

  it('calls backPress function when first icon is pressed', () => {
    const mockBackPress = jest.fn();
    const {getByTestId} = render(
      <CustomHeader firstIcon={{uri: 'test-icon'}} backPress={mockBackPress} />,
    );

    fireEvent.press(getByTestId('first-icon'));
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });

  it('renders children elements when passed', () => {
    const {getByText} = render(
      <CustomHeader>
        <Text>Child Element</Text>
      </CustomHeader>,
    );

    expect(getByText('Child Element')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(
      <CustomHeader title="Snapshot Header" firstIcon={{uri: 'test-icon'}} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
