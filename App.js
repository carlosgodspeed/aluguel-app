import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Routes from './src/router';

export default function App() {

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes/>
    </>
  );
}