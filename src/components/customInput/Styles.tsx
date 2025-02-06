import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {FONTS} from '../../constant/Fonts';
import {COLORS} from 'constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    mainContainer: {
      marginVertical: RFValue(6),
    },
    labelContainer: {flexDirection: 'row'},
    labelName: {
      fontFamily: FONTS.montserratRegular,
      color: COLORS.black,
    },
    container: {
      flexDirection: 'row',
    },
    boxContainer: {
      flexDirection: 'row',
      height: RFValue(38),
      flex: 1,
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(10),
      ...commonStyles.lightShadowColor,
    },
    firstIconView: {
      ...commonStyles.centerStyle,
    },
    firstIcon: {
      width: RFValue(18),
      height: RFValue(18),
      marginRight: RFValue(5),
    },
    line: {
      width: 1,
      backgroundColor: COLORS.silver,
      marginVertical: RFValue(7),
      marginRight: RFValue(10),
      marginLeft: RFValue(5),
    },
    textInput: {
      flex: 1,
      color: COLORS.black,
      ...commonStyles.h5_Regular,
    },
    errorText: {
      ...commonStyles.h6_Regular,
      color: COLORS.red,
      marginTop: RFValue(2),
    },
  });
};

export default createStyles;
