/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useContext } from 'react';
import store from './src/store/store';
import { Provider, ReactReduxContext } from 'react-redux';

import { AppContainer } from './src/screen/Navigator';


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
