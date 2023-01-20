import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import AppButton from './AppButton';

const AddExtensionModal = ({visible, setVisible, data, setData}) => {
  const [item, setItem] = useState({
    addDeduct: '',
    value: '',
    type: '',
    name: '',
  });

  const setItemValues = () => {
    const {addDeduct, value, type, name} = item;
    if (addDeduct && value && type && name) {
      const arr = [];
      arr = data;
      arr.push(item);
      setVisible(false);
    } else {
      alert('Please Fill all recomanded fields');
    }
  };

  console.log(item);

  return (
    <ReactNativeModal
      isVisible={visible}
      style={style.modalStyle}
      onBackdropPress={() => setVisible(false)}>
      <View style={style.Cnt}>
        <ScrollView>
          <Text style={style.modalTitle}>Please Select Extensions</Text>
          <View style={style.detailCnt}>
            <Text style={style.detailTitle}>Select Deduct Type:</Text>
            {['ADD', 'DEDUCT'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={style.button}
                onPress={() => setItem({addDeduct: item})}>
                <Text style={style.buttonTitle}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={style.detailCnt}>
            <Text style={style.detailTitle}>Select Type:</Text>
            {['PERCENTAGE', 'FIXED_VALUE'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={style.button}
                onPress={() => setItem({...item, type: item})}>
                <Text style={style.buttonTitle}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={style.detailCnt}>
            <Text style={style.detailTitle}>Value:</Text>
            <View style={{marginLeft: '2%'}}>
              <TextInput
                placeholder="ex.1"
                placeholderTextColor="lightgrey"
                keyboardType="number-pad"
                style={style.detailTitle}
                onChangeText={text => setItem({...item, value: text})}
              />
            </View>
          </View>
          <View style={style.detailCnt}>
            <Text style={style.detailTitle}>Name:</Text>
            <View style={{marginLeft: '2%'}}>
              <TextInput
                placeholder="Title"
                placeholderTextColor="lightgrey"
                style={style.detailTitle}
                onChangeText={text => setItem({...item, name: text})}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: '4%',
            }}>
            {['CLOSE', 'ADD'].map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    item === 'CLOSE' ? setVisible(false) : setItemValues()
                  }>
                  <Text style={{fontSize: 15, fontWeight: '500'}}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
};

export default AddExtensionModal;

const style = StyleSheet.create({
  modalStyle: {flex: 1, justifyContent: 'flex-end', margin: 0},
  Cnt: {
    flex: 0.8,
    backgroundColor: 'white',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  modalTitle: {
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
    margin: 10,
  },
  detailCnt: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
  },
  detailTitle: {fontSize: 15, fontWeight: '400', color: 'black'},
  button: {
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 2,
    borderRadius: 7,
  },
  buttonTitle: {fontSize: 15, fontWeight: '500'},
});
