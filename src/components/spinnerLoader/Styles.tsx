import {StyleSheet} from 'react-native';
import CommonStyle from '../../CommonStyle';

const createStyles = () => {
  const commonStyles = CommonStyle();

  return StyleSheet.create({
    container: {
      flex: 1,
      ...commonStyles.centerStyle,
    },
  });
};

export default createStyles;
