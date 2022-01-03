import * as React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import * as Sentry from '@sentry/react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
export default function App() {
  const textPress = () => console.log('Text');
  return (
    <SafeAreaView style={styles.container}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-1264500349297774/4900363531" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError} />
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