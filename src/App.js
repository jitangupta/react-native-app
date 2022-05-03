/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Icon name="home" size={30} />
        <Text>React Native App</Text> 
      </View>
    </SafeAreaView>
  );
};

export default App;
