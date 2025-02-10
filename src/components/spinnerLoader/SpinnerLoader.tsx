import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import createStyles from './Styles';
import {SpinnerLoaderProps} from '../../constant/interface/custom/Custom';
import {COLORS} from '../../constant/Colors';

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size = 'large',
  color,
  style,
}) => {
  const styles = createStyles();
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={size}
        color={color || COLORS.theme}
        testID="spinner-loader"
      />
    </View>
  );
};

export default SpinnerLoader;
