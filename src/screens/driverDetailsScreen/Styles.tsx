import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaView: {
      backgroundColor: COLORS.theme,
    },
    driverDetailView: {
      backgroundColor: COLORS.white,
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(30),
      paddingVertical: RFValue(10),
      marginBottom: RFValue(15),
      ...commonStyles.lightShadowColor,
    },
    textHeader: {
      color: COLORS.black,
      ...commonStyles.h4_Bold,
      marginBottom: RFValue(10),
      textAlign: 'center',
    },
    imageView: {
      height: RFValue(140),
      width: RFValue(125),
      alignSelf: 'center',
      marginVertical: RFValue(5),
    },
    image: {
      height: RFValue(125),
      width: RFValue(125),
      borderRadius: RFValue(100),
      resizeMode: 'cover',
    },
    pointView: {
      height: RFValue(35),
      width: RFValue(35),
      borderRadius: RFValue(100),
      backgroundColor: COLORS.theme,
      position: 'absolute',
      right: 10,
      bottom: 15,
      ...commonStyles.centerStyle,
    },
    pointText: {
      color: COLORS.white,
      ...commonStyles.h3_SemiBold,
    },
    mainContainer: {
      ...commonStyles.globalMarginHorizontal,
      marginTop: RFValue(15),
    },
    headerText: {
      color: COLORS.white,
      ...commonStyles.h3_SemiBold,
      alignSelf: 'center',
    },
    loaderView: {
      flex: 1,
      ...commonStyles.centerStyle,
      marginBottom: RFValue(50),
    },
    noDataTitle: {
      marginTop: RFValue(30),
      ...commonStyles.h3_Bold,
    },
    messageStyle: {
      marginHorizontal: RFValue(30),
    },
    containerStyle: {
      marginBottom: RFValue(50),
    },
    linkPress: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 10,
      right: 15,
    },
    linkImg: {
      height: RFValue(15),
      width: RFValue(15),
      tintColor: COLORS.theme,
    },
  });
};
export default createStyles;
