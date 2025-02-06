import {COLORS} from 'constant/Colors';
import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import createStyles from './Styles';
import {CustomInputProps} from 'constant/interface/custom/Custom';

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  labelStyle,
  value,
  onChangeText,
  placeholderTextColor,
  firstIcon,
  firstIconStyle,
  placeholder,
  boxStyle,
  textInputStyle,
  error,
  isTintColor,
  keyboardType,
  inputRef,
  editable,
  onSubmitEditing,
  multiline,
  onFocus,
  maxLength,
  isLine,
  autoCapitalize,
}) => {
  const styles = createStyles();
  return (
    <View style={styles.mainContainer}>
      {label && (
        <View style={styles.labelContainer}>
          {label && <Text style={[styles.labelName, labelStyle]}>{label}</Text>}
        </View>
      )}
      <View style={styles.container}>
        <View style={[styles.boxContainer, boxStyle]}>
          {firstIcon && (
            <>
              <View style={styles.firstIconView}>
                <Image
                  style={[styles.firstIcon, firstIconStyle]}
                  source={firstIcon}
                  tintColor={isTintColor ? isTintColor : COLORS.black}
                />
              </View>
              {isLine && <View style={styles.line} />}
            </>
          )}
          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[styles.textInput, textInputStyle]}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : COLORS.black
            }
            keyboardType={keyboardType}
            editable={editable}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
            onFocus={onFocus}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;
