import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from 'constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: RFValue(10),
      flex: 1,
    },
    firstIconContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: RFValue(30),
    },
    firstIcon: {
      width: RFValue(20),
      height: RFValue(20),
      resizeMode: 'contain',
      tintColor: COLORS.black,
    },
    titleView: {
      ...commonStyles.centerStyle,
      flex: 1,
    },
    titleText: {
      ...commonStyles.h2_Medium,
      color: COLORS.black,
    },
  });
};

export default createStyles;
