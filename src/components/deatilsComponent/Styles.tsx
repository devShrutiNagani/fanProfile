import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    textView: {
      flexDirection: 'row',
      marginBottom: RFValue(2),
    },
    titleText: {
      color: COLORS.black,
      ...commonStyles.h5_SemiBold,
    },
    text: {
      color: COLORS.black,
      ...commonStyles.h5_Regular,
    },
  });
};
export default createStyles;
