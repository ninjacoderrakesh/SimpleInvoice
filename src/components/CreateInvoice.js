import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {bankAccount} from '../assets/commonJsons';
import RenderBankDetailComponent from '../ReusableComponents/RenderBankDetailComponent';
import CustomerDetail from '../ReusableComponents/CustomerDetail';
import DocumentDetail from '../ReusableComponents/DocumentDetail';
import {GlobalStyel} from '../assets/Theme';
import AppButton from '../ReusableComponents/AppButton';
import AppHeader from '../ReusableComponents/AppHeader';

const CreateInvoice = ({navigation}) => {
  const [bankDetail, setBankDetail] = useState({
    bankAccount: {
      bankId: '',
    },
  });
  const [customer, setCustomer] = useState({});
  const [document, setDocument] = useState({});

  const nextPage = () => {
    const payload = {
      bankAccount: bankDetail.bankAccount,
      customer: {...customer, addresses: [customer.addresses]},
      documents: [document],
    };

    navigation.navigate('BillDetail', {payload: payload});
  };

  return (
    <SafeAreaView style={GlobalStyel.cnt}>
      <AppHeader title={'Create Invoice'} navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView>
          <Text style={style.title}>Fill Bank Details</Text>
          <RenderBankDetailComponent
            data={bankDetail}
            setData={setBankDetail}
          />

          <Text style={style.title}>Fill Customer Details</Text>
          <CustomerDetail data={customer} setData={setCustomer} />

          <Text style={style.title}>Add Documents</Text>
          <DocumentDetail data={document} setData={setDocument} />
          <AppButton onPress={() => nextPage()} title="Next" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateInvoice;

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
});
