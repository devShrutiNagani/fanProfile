import {ImageSourcePropType} from 'react-native';

export interface Error {
  name?: string;
  email?: string;
  [key: string]: string | undefined;
}

export interface UserField {
  questionID: number;
  label: string;
  placeholder: string;
  fieldName: string;
  firstIcon: ImageSourcePropType;
}
