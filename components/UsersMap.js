import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  return(
    <View styles={styles.mapContainer}>
      <MapView styles={styles.map}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default usersMap;
