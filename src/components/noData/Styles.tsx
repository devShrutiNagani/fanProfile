import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();

  return StyleSheet.create({
    container: {
      flex: 1,
      ...commonStyles.centerStyle,
    },
    image: {
      height: RFValue(150),
      width: RFValue(300),
      resizeMode: 'contain',
    },
    textView: {
      ...commonStyles.globalMarginHorizontal,
      alignItems: 'center',
    },
    title: {
      ...commonStyles.h4_SemiBold,
      color: COLORS.black,
      textAlign: 'center',
    },
    message: {
      ...commonStyles.h5_Regular,
      color: COLORS.black,
      textAlign: 'center',
      marginTop: RFValue(5),
    },
  });
};

export default createStyles;
