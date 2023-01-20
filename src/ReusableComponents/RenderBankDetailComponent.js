import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {bankAccount} from '../assets/commonJsons';
import {DateTimePicker} from 'react-native-ui-lib';
import moment from 'moment';

const RenderBankDetailComponent = ({key, data, setData}) => {
  return (
    <View key={key ? key : 1}>
      {bankAccount.map((item, index) => {
        // check the field is for user shown or not
        if (item.visible) {
          return (
            <View style={style.cnt} key={index}>
              <View style={style.title}>
                {(item.type === 'number' || item.type === 'text') && (
                  <TextInput
                    placeholder={item.placeHolder}
                    placeholderTextColor="lightgrey"
                    defaultValue={data.bankAccount[item.param]}
                    onChangeText={text =>
                      setData({
                        ...data,
                        bankAccount: {
                          ...data.bankAccount,
                          [item.param]: text,
                        },
                      })
                    }
                    keyboardType={
                      item.type === 'number' ? 'number-pad' : 'default'
                    }
                    style={style.inputStyle}
                  />
                )}
                {item.type === 'datePicker' && (
                  <DateTimePicker
                    key={index}
                    title={''}
                    placeholder={item.placeHolder}
                    mode={'date'}
                    onChange={date =>
                      setData({
                        ...data,
                        bankAccount: {
                          ...data.bankAccount,
                          [item.param]: moment(`${date}`).format('DD-MM-YYYY'),
                        },
                      })
                    }
                    renderInput={() => {
                      return (
                        <TextInput
                          placeholder={item.placeHolder}
                          placeholderTextColor="lightgrey"
                          defaultValue={data.bankAccount[item.param]}
                          style={style.inputStyle}
                        />
                      );
                    }}
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

export default RenderBankDetailComponent;

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
