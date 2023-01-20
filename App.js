import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigationContainer from './src/navigation/MainNavigationContainer';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {allReducer} from './src/redux/MainReducer';
import {Provider} from 'react-redux';
import RootSaga from './src/redux/sagas/rootSaga';
const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(RootSaga);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigationContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
