// export const API_URL = 'http://e29b-122-177-228-214.ngrok.io/api/web/';
export const API_URL = 'https://sandbox.101digital.io/';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetData = async payload => {
  const Token = await getAsyncValue('access_token');
  console.log(Token);
  return axios
    .get(
      payload.url,
      Token && {
        headers: {
          Authorization: 'Bearer ' + Token,
        },
      },
    )
    .then(res => {
      return res;
    })
    .catch(e => {
      return e;
    });
};

export const PostData = async payload => {
  const Token = await getAsyncValue('access_token');
  return axios
    .post(
      payload.url,
      payload.body,
      Token && {
        headers: {
          Authorization: 'Bearer ' + Token,
        },
      },
    )
    .then(res => {
      return res;
    })
    .catch(e => {
      return e;
    });
};

export const PutData = async payload => {
  const Token = await getAsyncValue('access_token');
  return axios
    .put(
      payload.url,
      payload.body,
      Token && {
        headers: {
          Authorization: 'Bearer ' + Token,
        },
      },
    )
    .then(res => {
      return res;
    })
    .catch(e => {
      return e;
    });
};

export const DeleteData = async payload => {
  const Token = await getAsyncValue('access_token');
  return axios
    .delete(
      payload.url,
      Token && {
        headers: {
          Authorization: 'Bearer ' + Token,
        },
      },
    )
    .then(res => {
      return res;
    })
    .catch(e => {
      return e;
    });
};

export const getAsyncValue = async key => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

export const StoreData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const RemoveStoreData = async key => {
  await AsyncStorage.removeItem(key);
};
