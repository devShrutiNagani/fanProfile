import {Keyboard} from 'react-native';
import {RegexValidate} from './RegexValidate';

const validationRules = {
  name: [
    {
      message: 'Please Enter Name',
      test: value => !value,
    },
  ],
  email: [
    {
      message: 'Please Enter Email',
      test: value => !value,
    },
    {
      message: 'Please enter valid email',
      test: value => value && !RegexValidate.emailRegex.test(value), // Check if the email format is invalid
    },
  ],
};

const indexMap = {
  0: ['name', 'email'],
};

export const ValidationSchema = (values, index) => {
  const errors = {};
  const fieldsToValidate =
    index !== undefined ? indexMap[index] : Object.keys(validationRules);

  fieldsToValidate &&
    fieldsToValidate.forEach(field => {
      const rules = validationRules[field];
      rules.some(rule => {
        if (rule.test(values[field])) {
          errors[field] = rule.message;
          Keyboard.dismiss();
          return true;
        }
        return false;
      });
    });

  return errors;
};
