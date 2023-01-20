import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    var details = {
      client_id: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
      client_secret: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
      grant_type: 'password',
      scope: 'openid',
      username: 'dung+octopus4@101digital.io',
      password: 'Abc@123456',
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://sandbox.101digital.io/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(e => alert('Somrthing went wrong try to open application again'));

    setTimeout(() => {
      navigation.replace('InvoiceList');
    }, 2000);
  }, []);

  return (
    <View style={style.cnt}>
      <Text>SplashScreen</Text>
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  cnt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
