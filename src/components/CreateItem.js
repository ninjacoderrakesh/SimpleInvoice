import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {bill, dummyInvoiceData, item} from '../assets/commonJsons';
import {GlobalStyel} from '../assets/Theme';
import AppButton from '../ReusableComponents/AppButton';
import {CommonActions} from '@react-navigation/native';

const CreateItem = ({navigation, route}) => {
  const [data, setData] = useState({
    invoiceReference: '',
    invoiceNumber: '',
    currency: '',
    dueDate: '',
    description: '',
  });
  const [customeField, setCustomeField] = useState([{key: '', value: ''}]);

  const setCustom = (text, type, index) => {
    let arr = customeField;
    arr[index]['type'] = text;
    setCustomeField([...arr]);
  };

  const createNewCustom = () => {
    let arr = customeField;
    arr.push({key: '', value: ''});
    setCustomeField([...arr]);
  };

  const CreateInvoice = () => {
    let item = [
      {
        ...data,
        customFields: customeField,
        extensions: [
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
        ],
      },
    ];
    let payload = {listOfInvoices: [{...route.params.payload, item: item}]};
    dummyInvoiceData.push({
      id: dummyInvoiceData.length + 1,
      customer: {
        firstName: payload.listOfInvoices[0].customer.firstName,
        lastName: payload.listOfInvoices[0].customer.lastName,
        contact: {
          email: payload.listOfInvoices[0].customer.contact.email,
          mobileNumber: payload.listOfInvoices[0].customer.contact.mobileNumber,
        },
      },
      invoiceReference: payload.listOfInvoices[0].invoiceReference,
      invoiceNumber: payload.listOfInvoices[0].invoiceNumber,
      currency: payload.listOfInvoices[0].currency,
      invoiceDate: payload.listOfInvoices[0].invoiceDate,
      dueDate: payload.listOfInvoices[0].dueDate,
      items: [
        {
          itemReference: payload.listOfInvoices[0].item[0].itemReference,
          description: payload.listOfInvoices[0].item[0].description,
          quantity: payload.listOfInvoices[0].item[0].quantity,
          rate: payload.listOfInvoices[0].item[0].rate,
          itemName: payload.listOfInvoices[0].item[0].itemName,
          itemUOM: payload.listOfInvoices[0].item[0].itemUOM,
        },
      ],
    });
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'InvoiceList'}],
      }),
    );
  };

  return (
    <SafeAreaView style={GlobalStyel.cnt}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView>
          <Text style={mainStyle.title}>Fill Item Details:</Text>
          {item.map((item, index) => {
            // check the field is for user shown or not
            if (item.visible) {
              return (
                <View style={style.cnt} key={index}>
                  <View style={style.title}>
                    {(item.type === 'number' || item.type === 'text') && (
                      <TextInput
                        placeholder={item.placeHolder}
                        placeholderTextColor="lightgrey"
                        defaultValue={data[item.param]}
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
          <Text style={mainStyle.title}>Extra:</Text>
          <FlatList
            data={customeField}
            renderItem={({item, index}) => {
              return (
                <View style={mainStyle.cnt} key={index}>
                  <View style={mainStyle.titleInput}>
                    <TextInput
                      placeholder={'title'}
                      placeholderTextColor="lightgrey"
                      defaultValue={data['key']}
                      onChangeText={text => setCustom(text, 'key', index)}
                      style={mainStyle.inputStyle}
                    />
                    <TextInput
                      placeholder={'value'}
                      placeholderTextColor="lightgrey"
                      defaultValue={data['value']}
                      onChangeText={text => setCustom(text, 'value', index)}
                      style={mainStyle.inputStyle}
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
          <AppButton
            onPress={() => CreateInvoice()}
            title="Click To New Create Bill"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateItem;

const mainStyle = StyleSheet.create({
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
