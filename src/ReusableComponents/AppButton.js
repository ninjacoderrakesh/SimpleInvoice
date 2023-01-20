import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const AppButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => onPress()}>
      <Text style={style.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const style = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 7,
    marginRight: '5%',
  },
  buttonTitle: {
    margin: 10,
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: '6%',
    color: 'black',
  },
});
