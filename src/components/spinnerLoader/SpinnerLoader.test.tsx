import React from 'react';
import {render} from '@testing-library/react-native';
import {COLORS} from '../../constant/Colors';
import SpinnerLoader from './SpinnerLoader';

describe('SpinnerLoader Component', () => {
  it('renders ActivityIndicator with default size and color', () => {
    const {getByTestId} = render(<SpinnerLoader />);

    const spinner = getByTestId('spinner-loader');
    expect(spinner).toBeTruthy();
    expect(spinner.props.size).toBe('large'); // Default size
    expect(spinner.props.color).toBe(COLORS.theme); // Default color
  });

  it('renders ActivityIndicator with custom size and color', () => {
    const {getByTestId} = render(<SpinnerLoader size="small" color="red" />);

    const spinner = getByTestId('spinner-loader');
    expect(spinner.props.size).toBe('small'); // Custom size
    expect(spinner.props.color).toBe('red'); // Custom color
  });

  it('matches snapshot', () => {
    const tree = render(<SpinnerLoader size="small" color="blue" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
