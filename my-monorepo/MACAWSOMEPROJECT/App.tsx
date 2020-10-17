import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const App = () => {

const [] = useState(0);
  const [count, setCount] = useState(0);

return (



<View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count +1)} />




    </View>




)


}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
