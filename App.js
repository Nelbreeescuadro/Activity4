import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import Screen4 from './screen/Screen4';
import Screen5 from './screen/Screen5';
import Screen6 from './screen/Screen6';
import Screen7 from './screen/Screen7';
import Screen8 from './screen/Screen8';
import Screen9 from './screen/Screen9';
import Screen10 from './screen/Screen10';
import Screen11 from './screen/Screen11';
import Screen12 from './screen/Screen12';
import Screen13 from './screen/Screen13';
import Screen14 from './screen/Screen14';
import Screen15 from './screen/Screen15';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <PaperProvider>
     <Stack.Navigator   screenOptions={{
        headerStyle: {
          backgroundColor: '#f3edf7',
        },
        headerTintColor: 'black', // Change the text color of the header buttons
        headerTitleStyle: {
          fontWeight: 'bold', // You can customize other text styles here
        },
      }}>
      <Stack.Screen name="Main Menu" component={Screen1} />
      <Stack.Screen name="Avatar" component={Screen2} />
      <Stack.Screen name="Badge" component={Screen3} />
      <Stack.Screen name="Banner" component={Screen4} />
      <Stack.Screen name="Button" component={Screen5} />
      <Stack.Screen name="Card" component={Screen6} />
      <Stack.Screen name="Chip" component={Screen7} />
      <Stack.Screen name="DataTable" component={Screen8} />
      <Stack.Screen name="Dialog" component={Screen9} />
      <Stack.Screen name="Divider" component={Screen10} />
      <Stack.Screen name="HelperText" component={Screen11} />
      <Stack.Screen name="List" component={Screen12} />
      <Stack.Screen name="Menu" component={Screen13} />
      <Stack.Screen name="Segmented" component={Screen14} />
      <Stack.Screen name="TextInput" component={Screen15} />
    </Stack.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );
}


