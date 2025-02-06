import {COLORS} from 'constant/Colors';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import createStyles from './Styles';
import {SpinnerLoaderProps} from 'constant/interface/custom/Custom';

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size = 'large',
  color,
  style,
}) => {
  const styles = createStyles();
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color || COLORS.theme} />
    </View>
  );
};

export default SpinnerLoader;
