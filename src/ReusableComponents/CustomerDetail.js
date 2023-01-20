import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {bankAccount, customer} from '../assets/commonJsons';
import {DateTimePicker} from 'react-native-ui-lib';
import moment from 'moment';

const contact = [
  {
    placeHolder: 'Enter Email',
    param: 'email',
    type: 'email',
    visible: true,
  },
  {
    placeHolder: 'Enter Mobile number',
    param: 'mobileNumber',
    type: 'number',
    visible: true,
  },
];

const addresses = [
  {
    placeHolder: 'Enter Premise',
    param: 'premise',
    type: 'text',
    visible: true,
  },
  {
    placeHolder: 'Enter Country Code',
    param: 'countryCode',
    type: 'text',
    visible: true,
  },
  {
    placeHolder: 'Enter Post Code',
    param: 'postcode',
    type: 'number',
    visible: true,
  },
  {
    placeHolder: 'Enter Country',
    param: 'county',
    type: 'text',
    visible: true,
  },
  {
    placeHolder: 'Enter City',
    param: 'city',
    type: 'text',
    visible: true,
  },
];

const CustomerDetail = ({key, data, setData}) => {
  return (
    <View key={key ? key : 1}>
      {customer.map((item, index) => {
        // check the field is for user shown or not
        if (item.visible) {
          return (
            <View style={style.cnt} key={index}>
              <View style={style.title}>
                {(item.type === 'number' || item.type === 'text') && (
                  <TextInput
                    placeholder={item.placeHolder}
                    placeholderTextColor="lightgrey"
                    defaultValue={null}
                    onChangeText={text =>
                      setData({
                        ...data,
                        [item.param]: text,
                      })
                    }
                    keyboardType={
                      item.type === 'number' ? 'number-pad' : 'default'
                    }
                    style={style.inputStyle}
                  />
                )}
              </View>
            </View>
          );
        }
      })}

      {contact.map((item, index) => {
        // check the field is for user shown or not
        if (item.visible) {
          return (
            <View style={style.cnt} key={index}>
              <View style={style.title}>
                {(item.type === 'number' ||
                  item.type === 'text' ||
                  item.type === 'email') && (
                  <TextInput
                    placeholder={item.placeHolder}
                    placeholderTextColor="lightgrey"
                    defaultValue={null}
                    onChangeText={text =>
                      setData({
                        ...data,
                        contact: {...data.contact, [item.param]: text},
                      })
                    }
                    keyboardType={
                      item.type === 'number' ? 'number-pad' : 'default'
                    }
                    style={style.inputStyle}
                  />
                )}
              </View>
            </View>
          );
        }
      })}
      {addresses.map((item, index) => {
        // check the field is for user shown or not
        if (item.visible) {
          return (
            <View style={style.cnt} key={index}>
              <View style={style.title}>
                {(item.type === 'number' ||
                  item.type === 'text' ||
                  item.type === 'email') && (
                  <TextInput
                    placeholder={item.placeHolder}
                    placeholderTextColor="lightgrey"
                    defaultValue={null}
                    onChangeText={text =>
                      setData({
                        ...data,
                        addresses: {...data.addresses, [item.param]: text},
                      })
                    }
                    keyboardType={
                      item.type === 'number' ? 'number-pad' : 'default'
                    }
                    style={style.inputStyle}
                  />
                )}
              </View>
            </View>
          );
        }
      })}
    </View>
  );
};

export default CustomerDetail;

const style = StyleSheet.create({
  cnt: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  inputStyle: {
    padding: 10,
    color: 'black',
  },
});
