import {View, Text} from 'react-native';
import React from 'react';
import createStyles from './Styles';
import {CustomDetailsComponent} from '../../constant/interface/custom/Custom';

const DetailsComponent: React.FC<CustomDetailsComponent> = ({title, data}) => {
  const styles = createStyles();
  return (
    <View style={styles.textView}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};
export default DetailsComponent;
