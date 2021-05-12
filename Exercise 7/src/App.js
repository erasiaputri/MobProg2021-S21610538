import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Regristrasi from './component/pages/Regristrasi';

const App = () => {
  return (
    <View>
      <Text style={styles.Title}>Registration</Text>
      <Regristrasi />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 18,
  },
});