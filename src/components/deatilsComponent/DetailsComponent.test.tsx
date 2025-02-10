import React from 'react';
import {render} from '@testing-library/react-native';
import DetailsComponent from './DetailsComponent';

describe('DetailsComponent', () => {
  it('renders the title and data correctly', () => {
    const {getByText} = render(
      <DetailsComponent title="Test Title" data="Test Data" />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Data')).toBeTruthy();
  });

  it('renders empty text when no data is provided', () => {
    const {getByText} = render(<DetailsComponent title="Only Title" data="" />);

    expect(getByText('Only Title')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = render(
      <DetailsComponent title="Snapshot Title" data="Snapshot Data" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
