import React, { FunctionComponent } from 'react';
import { SafeAreaView, StatusBar, StyleProp, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { createAppStore } from '@core/store';

import styles from './App.module.scss';
const style = styles as StyleProp<any>;

const App: FunctionComponent = () => (
  <SafeAreaView style={style.container}>
    <StatusBar barStyle='light-content' backgroundColor='black' />
    <Provider store={createAppStore()}>
      <View>
        <Text>{'App'}</Text>
      </View>
    </Provider>
  </SafeAreaView>
);

export default App;
