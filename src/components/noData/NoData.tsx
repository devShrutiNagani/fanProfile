import {View, Text, Image} from 'react-native';
import React from 'react';
import createStyles from './Styles';
import {NoDataProps} from 'constant/interface/custom/Custom';

const NoData: React.FC<NoDataProps> = ({
  containerStyle,
  image,
  imageStyle,
  title,
  titleStyle,
  message,
  messageStyle,
}) => {
  const styles = createStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={[styles.image, imageStyle]} source={image} />
      <View style={styles.textView}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.message, messageStyle]}>{message}</Text>
      </View>
    </View>
  );
};

export default NoData;
