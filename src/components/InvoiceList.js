import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyel} from '../assets/Theme';
import {Card, FloatingButton} from 'react-native-ui-lib';
import {dummyInvoiceData} from '../assets/commonJsons';
import AppHeader from '../ReusableComponents/AppHeader';

const InvoiceList = ({navigation}) => {
  const [searchArray, setSearchArray] = useState([]);
  const searchData = text => {
    if (text) {
      let registerNumber = text.replace(/^\s+|\s+$/gm, '');
      let array = [];
      dummyInvoiceData.map((item, index) => {
        if (
          (item.customer.firstName + ' ' + item.customer.lastName)
            .toLowerCase()
            .includes(registerNumber.toLowerCase())
        ) {
          array.push(item);
        }
      });
      setSearchArray([...array]);
    } else {
      setSearchArray([]);
    }
  };

  const renderCard = (item, index) => {
    const {firstName, lastName} = item.customer;
    return (
      <View style={style.cardCnt}>
        <View style={[style.cardHeader, {backgroundColor: '#f7f7f7'}]}>
          <Text style={style.UserName}>
            {firstName} {lastName}
          </Text>
          <Text style={style.invoiceNumber}>{item.invoiceNumber}</Text>
        </View>
        <View style={style.cardFooter}>
          <Text style={style.title}>
            Due Date: <Text style={style.desc}>{item.dueDate}</Text>
          </Text>
          <Text style={style.title}>Product Detail:</Text>
          {item.items.map((product, index) => {
            return (
              <View style={style.productCnt} key={index}>
                <Text style={style.title}>
                  Item Name: <Text style={style.desc}>{product.itemName}</Text>
                </Text>
                <Text style={style.title}>
                  Quantity: <Text style={style.desc}>{product.quantity}</Text>
                </Text>
                <Text style={style.title}>
                  Rate: <Text style={style.desc}>{product.rate}</Text>
                </Text>
                <Text style={style.title}>
                  UOM: <Text style={style.desc}>{product.itemUOM}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[GlobalStyel.cnt, {backgroundColor: 'lightgrey'}]}>
      <AppHeader
        title={'Invoice Lists'}
        searchData={text => searchData(text)}
      />
      {searchArray.length > 0 ? (
        <FlatList
          data={searchArray}
          renderItem={({item, index}) => renderCard(item, index)}
          extraData={({item, index}) => index}
          ListFooterComponent={() => <View style={{height: 100}} />}
        />
      ) : (
        <FlatList
          data={dummyInvoiceData}
          renderItem={({item, index}) => renderCard(item, index)}
          extraData={({item, index}) => index}
          ListFooterComponent={() => <View style={{height: 100}} />}
        />
      )}
      <FloatingButton
        visible={true}
        button={{
          label: 'Click To Create New Invoice',
          onPress: () => navigation.navigate('CreateInvoiceScreen'),
        }}
        bottomMargin={40}
      />
    </SafeAreaView>
  );
};

export default InvoiceList;

const style = StyleSheet.create({
  cardCnt: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '2%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  UserName: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: 'black',
  },
  invoiceNumber: {marginTop: '1%', fontSize: 10, color: 'black'},
  cardFooter: {
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    padding: 10,
  },
  title: {color: 'black', fontWeight: '500', marginBottom: '2%'},
  desc: {fontWeight: '400'},
  productCnt: {
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderRadius: 2,
    marginVertical: '1%',
  },
});
