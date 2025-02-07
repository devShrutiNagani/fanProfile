import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CommonStyle from '../../CommonStyle';
import DetailsComponent from '../../components/deatilsComponent/DetailsComponent';
import CustomHeader from '../../components/header/CustomHeader';
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader';
import {COLORS} from '../../constant/Colors';
import {DRIVER_DETAILS} from '../../constant/HeaderTitle';
import {ICONS, IMAGES} from '../../constant/Images';
import {
  BIRTH_DATE,
  CONSTRUCTOR_DETAILS,
  EMAIL,
  FAMILY_NAME,
  ID,
  NAME,
  NATIONALITY,
  USER_DETAILS,
} from '../../constant/TitleText';
import DataContext from '../../context/DataContext';
import {getDriverDetails} from '../../service/DriverDataService';
import createStyles from './Styles';
import {DriverDetailsScreenNavigationProp} from '../../constant/interface/Navigation';
import {UserDetailsField} from '../../constant/interface/screen/DriverDetailsScreen';

const DriverDetailsScreen: React.FC<DriverDetailsScreenNavigationProp> = ({
  route,
  navigation,
}) => {
  const {userData, handleLinkPress} = useContext(DataContext);
  console.log('route', route);

  const {driverID} = route?.params;
  const [driverDetails, setDriverDetails] = useState<UserDetailsField>();
  const [isLoading, setIsLoading] = useState(false);
  const commonStyles = CommonStyle();
  const styles = createStyles();

  useEffect(() => {
    fetchDriverData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDriverData = async () => {
    setIsLoading(true);
    try {
      // Get Data From API
      const driver = await getDriverDetails();
      if ('data' in driver) {
        const driverData =
          driver?.data?.MRData?.StandingsTable?.StandingsLists[0]
            ?.DriverStandings;

        const selectedDriver = driverData?.find(
          (item: UserDetailsField) =>
            item?.Driver?.permanentNumber === driverID,
        );
        if (driver?.status === 200) {
          setDriverDetails(selectedDriver);
        }
      } else {
        console.error('API Error:', driver);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
    setIsLoading(false);
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.safeAreaView}>
        <View style={{...commonStyles.header}}>
          <CustomHeader
            title={DRIVER_DETAILS}
            titleTextStyle={styles.headerText}
            firstIcon={ICONS.backIcon}
            backPress={onBackPress}
            firstIconStyle={{tintColor: COLORS.white}}
          />
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loaderView}>
          <SpinnerLoader size={'large'} color={COLORS.theme} />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.driverDetailView}>
              <View style={styles.imageView}>
                <Image source={IMAGES.driver} style={styles.image} />
                <View style={styles.pointView}>
                  <Text style={styles.pointText}>{driverDetails?.points}</Text>
                </View>
              </View>
              <DetailsComponent
                title={NAME}
                data={driverDetails?.Driver?.givenName}
              />
              <DetailsComponent
                title={NATIONALITY}
                data={driverDetails?.Driver?.nationality}
              />
              <DetailsComponent
                title={FAMILY_NAME}
                data={driverDetails?.Driver?.familyName}
              />
              <DetailsComponent
                title={BIRTH_DATE}
                data={driverDetails?.Driver?.dateOfBirth}
              />
            </View>
          </View>
          <View style={styles.driverDetailView}>
            <Text style={styles.textHeader}>{USER_DETAILS}</Text>
            <DetailsComponent title={NAME} data={userData?.name} />
            <DetailsComponent title={EMAIL} data={userData?.email} />
          </View>
          <View style={styles.driverDetailView}>
            <Text style={styles.textHeader}>{CONSTRUCTOR_DETAILS}</Text>
            <DetailsComponent
              title={NAME}
              data={driverDetails?.Constructors[0].name}
            />
            <DetailsComponent
              title={ID}
              data={driverDetails?.Constructors[0]?.constructorId}
            />
            <DetailsComponent
              title={NATIONALITY}
              data={driverDetails?.Constructors[0]?.nationality}
            />
            <TouchableOpacity
              style={styles.linkPress}
              onPress={() => {
                const url = driverDetails?.Constructors[0]?.url || '';
                handleLinkPress(url);
              }}>
              <Image source={ICONS.link} style={styles.linkImg} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DriverDetailsScreen;
