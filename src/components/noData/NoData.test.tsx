import React from 'react';
import {render} from '@testing-library/react-native';
import NoData from './NoData';

describe('NoData Component', () => {
  it('renders title and message correctly', () => {
    const {getByText} = render(
      <NoData title="No Data Available" message="Please try again later" />,
    );

    expect(getByText('No Data Available')).toBeTruthy();
    expect(getByText('Please try again later')).toBeTruthy();
  });

  it('renders the image when provided', () => {
    const {getByTestId} = render(<NoData image={{uri: 'test-image'}} />);

    expect(getByTestId('no-data-image')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(
      <NoData
        title="Snapshot Title"
        message="Snapshot Message"
        image={{uri: 'test-image'}}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
