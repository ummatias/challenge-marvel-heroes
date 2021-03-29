import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Routes from './src/Routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('./src/assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Heavy': require('./src/assets/fonts/Gilroy-Heavy.ttf'),
    'Gilroy-Medium': require('./src/assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Regular': require('./src/assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Semibold': require('./src/assets/fonts/Gilroy-Semibold.ttf')

  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
  }
}
