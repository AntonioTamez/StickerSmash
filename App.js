import { useEffect, useState } from 'react';
import { FONTS } from './constants/fonts';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import AppNavigation from './navigations/AppNavigation';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  useEffect(() =>{
  const cargarFuentes = async() => {
      try{
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(FONTS)
      } catch (e) {

      } finally {
        setFontsLoaded(true)
        SplashScreen.hideAsync();
      }
    }
    cargarFuentes()
  }, [])

  if(!fontsLoaded){
    return null
  }

  return (
    <AppNavigation/>
  );
}