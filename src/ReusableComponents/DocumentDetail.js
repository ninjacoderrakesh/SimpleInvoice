import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {bankAccount, customer, document} from '../assets/commonJsons';

const DocumentDetail = ({key, data, setData}) => {
  console.log(data);
  return (
    <View key={key ? key : 1}>
      {document.map((item, index) => {
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
    </View>
  );
};

export default DocumentDetail;

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
