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
    contentContainerStyle: {
      flex: 1,
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
    dataContainer: {
      backgroundColor: COLORS.white,
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(10),
      paddingVertical: RFValue(10),
      marginBottom: RFValue(15),
      ...commonStyles.lightShadowColor,
      marginHorizontal: RFValue(20),
      borderWidth: 1,
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
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    nameSubContainer: {
      borderColor: COLORS.theme,
      justifyContent: 'center',
    },
    nameTxt: {
      color: COLORS.black,
      ...commonStyles.h3_Bold,
    },
    nationality: {
      borderColor: COLORS.theme,
      borderWidth: 1,
      paddingHorizontal: RFValue(15),
      paddingVertical: RFValue(5),
      borderRadius: RFValue(4),
      backgroundColor: COLORS.lightTheme,
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
