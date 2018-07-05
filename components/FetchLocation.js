import React from 'react';
import { Button, Text, View } from 'react-native';

const fetchLocation = props => {
  return (
      <Button title="Get Location" onPress={props.onGetLocation} />
  );
};

export default fetchLocation;
