import React, {useState, useEffect, useContext} from 'react';
import AppNavigator from './src/navigation/AppNavigation'; // Ensure this path is correct
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';
import { AuthProvider } from './src/screens/AccountScreen/AuthContext'
import { MusicPlayerContext, MusicPlayerProvider } from './src/contexts/SongContext';


function App() {

  const [test, settest] = useState('yes');

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <MusicPlayerProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <AppNavigator test={test}/>
        </NavigationContainer>
      </SafeAreaView>
    </MusicPlayerProvider>
  );
}

export default App;

