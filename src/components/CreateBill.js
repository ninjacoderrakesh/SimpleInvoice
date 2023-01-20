import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyel} from '../assets/Theme';
import BillDetail from '../ReusableComponents/BillDetail';
import moment from 'moment';
import AppButton from '../ReusableComponents/AppButton';
import ReactNativeModal from 'react-native-modal';
import AddExtensionModal from '../ReusableComponents/AddExtensionModal';

const CreateBill = ({navigation, route}) => {
  const [data, setData] = useState({
    invoiceReference: '',
    invoiceNumber: '',
    currency: '',
    invoiceDate: moment().format('YYYY-MM-DD'),
    dueDate: '',
    description: '',
  });

  const [customeField, setCustomeField] = useState([{key: '', value: ''}]);
  const [extension, setExtension] = useState([]);
  const [extensionModal, setExtensionModal] = useState(false);

  console.log('Extention Array =>', extension);

  const setCustom = (text, type, index) => {
    let arr = customeField;
    arr[index][type] = text;
  };

  const createNewCustom = () => {
    let arr = customeField;
    arr.push({key: '', value: ''});
    setCustomeField([...arr]);
  };

  const onNext = () => {
    let extension = [
      {
        addDeduct: 'ADD',
        value: 10,
        type: 'FIXED_VALUE',
        name: 'tax',
      },
      {
        addDeduct: 'DEDUCT',
        value: 10,
        type: 'PERCENTAGE',
        name: 'tax',
      },
    ];

    let payload = {
      ...route.params.payload,
      ...data,
      customFields: customeField,
      extensions: extension,
    };
    navigation.navigate('ItemDetail', {payload: payload});
  };

  return (
    <SafeAreaView style={GlobalStyel.cnt}>
      {/* <AddExtensionModal
        visible={extensionModal}
        setVisible={setExtensionModal}
        data={extension}
        setData={setExtension}
      /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView>
          <Text style={style.title}>Fill Billing Details</Text>
          <BillDetail data={data} setData={setData} />
          <Text style={[style.title, {color: 'black'}]}>
            Fill Custom Fields
          </Text>
          <FlatList
            data={customeField}
            renderItem={({item, index}) => {
              return (
                <View style={style.cnt} key={index}>
                  <View style={style.titleInput}>
                    <TextInput
                      placeholder={'title'}
                      placeholderTextColor="lightgrey"
                      defaultValue={data['key']}
                      onChangeText={text => setCustom(text, 'key', index)}
                      style={style.inputStyle}
                    />
                    <TextInput
                      placeholder={'value'}
                      placeholderTextColor="lightgrey"
                      defaultValue={data['value']}
                      onChangeText={text => setCustom(text, 'value', index)}
                      style={style.inputStyle}
                    />
                  </View>
                </View>
              );
            }}
            extraData={({item, index}) => index}
            ListFooterComponent={() => (
              <AppButton
                onPress={() => createNewCustom()}
                title={'Create New Custom'}
              />
            )}
          />
          {/* <Text style={style.title}>Extensions</Text>
          <AppButton
            onPress={() => setExtensionModal(true)}
            title="Add New Extension"
          /> */}
          <AppButton onPress={() => onNext()} title="Next" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateBill;

const style = StyleSheet.create({
  title: {
    width: '90%',
    alignSelf: 'center',
    padding: 5,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
    color: 'black',
  },
  cnt: {
    width: '90%',
    alignSelf: 'center',
  },
  inputStyle: {
    padding: 10,
    color: 'black',
  },
  titleInput: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
});
