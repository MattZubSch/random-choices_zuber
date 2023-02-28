import { StyleSheet, View, SafeAreaView } from 'react-native';

import TabNavigator from './src/navigation/TabNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  return (

    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: "#EEECE8",
  }
});

