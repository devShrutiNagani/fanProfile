import {StatusBar, StyleSheet, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from './constant/Fonts';
import {COLORS} from './constant/Colors';

// Create the type for the return value of createFontStyles
interface FontStyles {
  [key: string]: TextStyle;
}

const CommonStyle = () => {
  // Function to dynamically create font styles based on font weight
  const createFontStyles = (
    fontWeight: string,
    weightName: string,
  ): FontStyles => ({
    [`h1_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(20),
      includeFontPadding: false,
    },
    [`h2_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(18),
      includeFontPadding: false,
    },
    [`h3_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(16),
      includeFontPadding: false,
    },
    [`h4_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(14),
      includeFontPadding: false,
    },
    [`h5_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(12),
      includeFontPadding: false,
    },
    [`h6_${weightName}`]: {
      fontFamily: FONTS[fontWeight],
      fontSize: RFValue(10),
      includeFontPadding: false,
    },
    centerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    globalMarginHorizontal: {
      marginHorizontal: RFValue(20),
    },
    header: {
      height: RFValue(40),
      paddingHorizontal: RFValue(15),
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight,
    },
    lightShadowColor: {
      shadowColor: COLORS.black,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    smallBtnContain: {
      height: RFValue(40),
      width: RFValue(47),
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediumBtnContain: {
      height: RFValue(40),
      width: RFValue(82),
      alignItems: 'center',
      justifyContent: 'center',
    },
    largeBtnContain: {
      height: RFValue(40),
      width: RFValue(150),
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnOutLine: {
      borderColor: COLORS.theme,
      borderWidth: 1,
    },
  });

  return StyleSheet.create({
    ...createFontStyles('montserratLight', 'Light'),
    ...createFontStyles('montserratRegular', 'Regular'),
    ...createFontStyles('montserratMedium', 'Medium'),
    ...createFontStyles('montserratSemiBold', 'SemiBold'),
    ...createFontStyles('montserratBold', 'Bold'),
  });
};

export default CommonStyle;
