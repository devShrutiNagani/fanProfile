import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import createStyles from './Styles';
import {CustomHeaderProps} from '../../constant/interface/custom/Custom';

const CustomHeader: React.FC<CustomHeaderProps> = ({
  firstIcon,
  title,
  titleTextStyle,
  firstIconStyle,
  children,
  backPress,
}) => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      {firstIcon && (
        <TouchableOpacity
          onPress={backPress}
          style={styles.firstIconContainer}
          testID="back-button">
          <Image
            testID="first-icon"
            style={[styles.firstIcon, firstIconStyle]}
            source={firstIcon}
          />
        </TouchableOpacity>
      )}

      <View style={styles.titleView}>
        {title && (
          <Text
            style={[
              styles.titleText,
              titleTextStyle,
              {marginRight: firstIcon && RFValue(30)},
            ]}
            numberOfLines={1}>
            {title}
          </Text>
        )}
        {children}
      </View>
    </View>
  );
};

export default CustomHeader;
