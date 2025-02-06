import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface CustomInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText: (text: string) => void;
  placeholderTextColor?: string;
  firstIcon?: ImageSourcePropType;
  firstIconStyle?: StyleProp<ImageStyle>;
  placeholder?: string;
  boxStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  error?: string;
  isTintColor?: string;
  keyboardType?: TextInputProps['keyboardType'];
  inputRef?: React.Ref<TextInput>;
  editable?: boolean;
  onSubmitEditing?: () => void;
  multiline?: boolean;
  onFocus?: () => void;
  maxLength?: number;
  isLine?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
}

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoadingColor?: string;
}

export interface NoDataProps {
  containerStyle?: ViewStyle;
  image: ImageSourcePropType;
  imageStyle?: ImageStyle;
  title: string;
  titleStyle?: TextStyle;
  message: string;
  messageStyle?: TextStyle;
}

export interface SpinnerLoaderProps {
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
}

export interface CustomHeaderProps {
  firstIcon?: ImageSourcePropType;
  title?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  firstIconStyle?: StyleProp<ImageStyle>;
  children?: ReactNode;
  backPress?: () => void;
}

export interface CustomDetailsComponent {
  title?: string;
  data?: string;
  backPress?: () => void;
}
