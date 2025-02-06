// UserDataScreen.tsx
import {COLORS} from 'constant/Colors';
import {IMAGES} from 'constant/Images';
import {UserDataScreenNavigationProp} from 'constant/interface/Navigation';
import {Error, UserField} from 'constant/interface/screen/UserDataScreen';
import {staticUserData} from 'constant/json/UserData';
import React, {useContext, useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import {SAVE} from '../../constant/ButtonLabel';
import {SCREENS} from '../../constant/ScreensName';
import {ValidationSchema} from '../../constant/ValidationSchema';
import DataContext from '../../context/DataContext';
import createStyles from './Styles';

const UserDataScreen: React.FC<UserDataScreenNavigationProp> = ({
  navigation,
}) => {
  const styles = createStyles();
  const {userData, setUserData} = useContext(DataContext);
  const [error, setError] = useState<Error>({});

  const handleSaveData = () => {
    const validation = ValidationSchema(userData, 0);
    setError(validation);
    if (Object.keys(validation).length === 0) {
      navigation.replace(SCREENS.driverListScreen);
    }
  };

  const handleOnChangeText = (value: string, fieldName: string) => {
    setUserData({
      ...userData,
      [fieldName]: value,
    });
    setError(prevState => ({
      ...prevState,
      [fieldName]: '',
    }));
  };

  const renderUserItem = ({item}: {item: UserField}) => {
    return (
      <CustomInput
        label={item.label}
        labelStyle={styles.labelStyle}
        textInputStyle={styles.inputStyle}
        placeholder={item.placeholder}
        boxStyle={styles.inputBoxStyle}
        error={error[item.fieldName]}
        placeholderTextColor={COLORS.grey}
        onChangeText={text => handleOnChangeText(text, item.fieldName)}
        firstIcon={item.firstIcon}
        isLine
      />
    );
  };

  const footerComponent = () => {
    return (
      <CustomButton
        title={SAVE}
        variant={'largeContain'}
        style={styles.buttonContainer}
        onPress={() => handleSaveData()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.safeAreaView}>
        <Image source={IMAGES.userDataImg} style={styles.userImage} />
      </View>
      <View style={styles.flatListContainer}>
        <View style={styles.flatListSubContainer}>
          <FlatList
            data={staticUserData}
            renderItem={renderUserItem}
            keyExtractor={item => item.questionID.toString()}
            contentContainerStyle={styles.flatListContainerStyle}
            ListFooterComponent={footerComponent}
          />
        </View>
      </View>
    </View>
  );
};

export default UserDataScreen;
