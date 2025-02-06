import {DriverDataListScreenNavigationProp} from 'constant/interface/Navigation';
import {Driver} from 'constant/interface/screen/DriverDataScreen';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import DataContext from '../../context/DataContext';
import CommonStyle from '../../CommonStyle';
import DetailsComponent from '../../components/deatilsComponent/DetailsComponent';
import CustomHeader from '../../components/header/CustomHeader';
import NoData from '../../components/noData/NoData';
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader';
import {COLORS} from '../../constant/Colors';
import {DRIVER_DATA} from '../../constant/HeaderTitle';
import {ICONS, IMAGES} from '../../constant/Images';
import {SCREENS} from '../../constant/ScreensName';
import {
  CODE,
  ID,
  NO_DATA_DESC,
  NO_DATA_TITLE,
  NUMBER,
} from '../../constant/TitleText';
import {getDriverData} from '../../service/DriverDataService';
import createStyles from './Styles';

const DriverListScreen: React.FC<DriverDataListScreenNavigationProp> = ({
  navigation,
}) => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const commonStyles = CommonStyle();
  const styles = createStyles();
  const {handleLinkPress} = useContext(DataContext);

  useEffect(() => {
    fetchDriverData();
  }, []);

  const fetchDriverData = async () => {
    setIsLoading(true);
    //get Data From API
    const driverData = await getDriverData();
    if (driverData?.status === 200) {
      if ('data' in driverData) {
        setDrivers(driverData?.data?.MRData?.DriverTable?.Drivers);
      }
    }
    setIsLoading(false);
  };

  const handleDriverSelect = (driver: Driver) => {
    setSelectedDriver(driver); // Set the selected driver
    navigation.navigate(SCREENS.driverDetailsScreen, {
      driverID: driver?.permanentNumber,
    });
  };

  const renderItem = ({item, index}: {item: Driver; index: number}) => {
    const isSelected = selectedDriver?.driverId === item.driverId;
    return (
      <TouchableOpacity
        style={[
          styles.dataContainer,
          {
            borderColor: isSelected ? COLORS.theme : COLORS.white,
            marginTop: index === 0 ? RFValue(15) : 0,
          },
        ]}
        onPress={() => handleDriverSelect(item)}
        activeOpacity={0.7}>
        <View style={styles.nameContainer}>
          <View style={styles.nameSubContainer}>
            <Text
              style={
                styles.nameTxt
              }>{`${item?.givenName} ${item.familyName}`}</Text>
          </View>
          <View style={styles.nationality}>
            <Text>{item?.nationality}</Text>
          </View>
        </View>
        <DetailsComponent title={ID} data={item?.driverId} />
        <DetailsComponent title={NUMBER} data={item?.permanentNumber} />
        <DetailsComponent title={CODE} data={item?.code} />
        <TouchableOpacity
          style={styles.linkPress}
          onPress={() => {
            handleLinkPress(item?.url);
          }}>
          <Image source={ICONS.link} style={styles.linkImg} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.safeAreaView}>
        <View style={{...commonStyles.header}}>
          <CustomHeader
            title={DRIVER_DATA}
            titleTextStyle={styles.headerText}
          />
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loaderView}>
          <SpinnerLoader size={'large'} color={COLORS.theme} />
        </View>
      ) : (
        <View style={styles.container}>
          {drivers.length > 0 ? (
            <FlatList
              data={drivers}
              renderItem={renderItem}
              style={styles.contentContainerStyle}
              keyExtractor={item => item.driverId}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <NoData
              image={IMAGES.noData}
              title={NO_DATA_TITLE}
              message={NO_DATA_DESC}
              titleStyle={styles.noDataTitle}
              messageStyle={styles.messageStyle}
              containerStyle={styles.containerStyle}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default DriverListScreen;
