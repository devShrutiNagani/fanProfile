import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CommonStyle from '../../CommonStyle';
import {COLORS} from '../../constant/Colors';

const createStyles = () => {
  const commonStyles = CommonStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    safeAreaView: {
      flex: 1,
      alignItems: 'center',
    },
    userImage: {
      height: RFValue(350),
      width: RFValue(350),
      resizeMode: 'contain',
      marginTop: RFValue(50),
    },
    flatListContainer: {
      flex: 1.2,
      paddingBottom: RFValue(20),
    },
    flatListSubContainer: {
      backgroundColor: COLORS.warmGrey,
      margin: RFValue(20),
      paddingHorizontal: RFValue(15),
      paddingVertical: RFValue(30),
      borderRadius: RFValue(8),
      borderColor: 'lightgrey',
      borderWidth: 0.4,
      ...commonStyles.lightShadowColor,
    },
    labelStyle: {marginBottom: RFValue(10), ...commonStyles.h5_Medium},
    buttonContainer: {
      alignSelf: 'center',
      marginTop: RFValue(15),
    },
    flatListContainerStyle: {paddingHorizontal: RFValue(15)},
    inputStyle: {
      ...commonStyles.h5_Medium,
      color: COLORS.black,
    },
    inputBoxStyle: {
      backgroundColor: COLORS.white,
    },
  });
};

export default createStyles;
