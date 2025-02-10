import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import createStyles from './Styles';
import {CustomButtonProps} from '../../constant/interface/custom/Custom';
import {COLORS} from '../../constant/Colors';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'smallContain',
  style,
  titleStyle,
  disabled = false,
  isLoadingColor,
}) => {
  let buttonStyle;
  let buttonTxtStyle;
  const styles = createStyles(disabled);
  switch (variant) {
    case 'largeContain':
      buttonStyle = styles.largeContain;
      buttonTxtStyle = styles.largeContainTxt;
      break;
  }

  return (
    <TouchableOpacity
      testID="custom-button"
      onPress={onPress}
      style={[styles.button, buttonStyle, style]}
      disabled={disabled}
      activeOpacity={0.7}>
      {title === 'isLoading' ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="small"
          color={isLoadingColor ? isLoadingColor : COLORS.theme}
        />
      ) : (
        <Text style={[styles.buttonText, buttonTxtStyle, titleStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
