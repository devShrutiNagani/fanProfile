import {StyleSheet} from 'react-native';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';
const createStyles = (disabled: boolean) => {
  const commonStyles = CommonStyle();

  return StyleSheet.create({
    button: {
      ...commonStyles.centerStyle,
      borderRadius: 8,
    },
    buttonText: {
      color: COLORS.white,
      ...commonStyles.h4_SemiBold,
    },
    smallContain: {
      ...commonStyles.smallBtnContain,
      backgroundColor: disabled ? COLORS.grey : COLORS.theme,
    },
    smallContainTxt: {
      color: COLORS.white,
      ...commonStyles.h4_SemiBold,
    },
    smallContainOutLine: {
      ...commonStyles.smallBtnContain,
      ...commonStyles.btnOutLine,
    },
    smallContainOutLineTxt: {
      color: COLORS.theme,
      ...commonStyles.h4_SemiBold,
    },
    mediumContain: {
      ...commonStyles.mediumBtnContain,
      backgroundColor: disabled ? COLORS.grey : COLORS.theme,
    },
    mediumContainTxt: {
      color: COLORS.white,
      ...commonStyles.h4_SemiBold,
    },
    mediumContainOutLine: {
      ...commonStyles.mediumBtnContain,
      ...commonStyles.btnOutLine,
    },
    mediumContainOutLineTxt: {
      color: COLORS.theme,
      ...commonStyles.h4_SemiBold,
    },
    largeContain: {
      ...commonStyles.largeBtnContain,
      backgroundColor: disabled ? COLORS.grey : COLORS.theme,
    },
    largeContainTxt: {
      color: COLORS.white,
      ...commonStyles.h4_SemiBold,
    },
    largeContainOutLine: {
      ...commonStyles.largeBtnContain,
      ...commonStyles.btnOutLine,
    },
    largeContainOutLineTxt: {
      color: COLORS.theme,
      ...commonStyles.h4_SemiBold,
    },
  });
};
export default createStyles;
