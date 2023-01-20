import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../components/SplashScreen';
import CreateInvoice from '../components/CreateInvoice';
import CreateBill from '../components/CreateBill';
import CreateItem from '../components/CreateItem';
import InvoiceList from '../components/InvoiceList';

const Stack = createNativeStackNavigator();

const NormalStackScreen = (name, screen) => {
  return (
    <Stack.Screen
      name={name}
      component={screen}
      options={{headerShown: false}}
    />
  );
};

const MainNavigationContainer = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {NormalStackScreen('SplashScreen', SplashScreen)}
      {NormalStackScreen('InvoiceList', InvoiceList)}
      {NormalStackScreen('CreateInvoiceScreen', CreateInvoice)}
      {NormalStackScreen('BillDetail', CreateBill)}
      {NormalStackScreen('ItemDetail', CreateItem)}
    </Stack.Navigator>
  );
};

export default MainNavigationContainer;

const style = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 110 : 80,
    width: '100%',
    alignSelf: 'center',
    borderTopWidth: 0,
    elevation: 0,
  },
  TabLabelTxt: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  tabBarLabelCnt: {height: 40, marginTop: '0%'},
  tabBarPlusIconCnt: {
    borderRadius: 1000,
    marginTop: '-40%',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vehicleIconCnt: {height: '90%', width: '45%'},
  vehicleIcon: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    height: '100%',
    width: '100%',
  },
  pointStyle: {
    height: 7,
    width: 7,
    backgroundColor: 'red',
    top: '-100%',
    borderRadius: 1000,
  },
});
