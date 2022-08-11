import { StatusBar } from 'expo-status-bar';
import { List } from './src/screens/List';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_700Bold
  });

  useEffect(()=> {
    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  return (
    <>
      {fontsLoaded && (
        <List />
      )}
      <StatusBar style="light" />
    </>
  );
}