import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets/Theme';

const AppHeader = ({navigation, title, searchData}) => {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={[style.cnt, navigation && {justifyContent: 'flex-start'}]}>
      {navigation && (
        <TouchableOpacity
          style={{height: '100%', width: '6%', marginRight: '3%'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3415/3415823.png',
            }}
            style={{flex: 1}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      {search ? (
        <TextInput
          placeholder="Search by user name"
          placeholderTextColor={'grey'}
          defaultValue={searchValue}
          onChangeText={text => {
            searchData(text), setSearchValue(text);
          }}
          style={style.textInput}
        />
      ) : (
        <Text style={style.title}>{title}</Text>
      )}
      {!navigation && (
        <TouchableOpacity
          style={{height: '100%', width: '6%'}}
          onPress={() => {
            setSearch(!search), search && searchData('');
          }}>
          <Image
            source={{
              uri: search
                ? 'https://cdn-icons-png.flaticon.com/512/2997/2997911.png'
                : 'https://cdn-icons-png.flaticon.com/512/2989/2989907.png',
            }}
            style={{flex: 1}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const style = StyleSheet.create({
  cnt: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    width: '97%',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: COLORS.primary,
  },
  textInput: {color: 'black', fontWeight: '400', letterSpacing: 0.5},
  title: {fontSize: 18, fontWeight: '600'},
});
