import * as React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
export default function App() {
  const textPress = () => console.log('Text');
  return (
    <SafeAreaView style={styles.container}>
      <Text  onPress={textPress} style={styles.h1}>
      gakkō
      </Text>
      <Text style={styles.h2}>Education for everyone</Text>
      <Text style={styles.h2}>Education for nobody</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2855AE",
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
});