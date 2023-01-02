import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfilScreen from './Screens/Profil';
import StatsScreen from "./Screens/Statsscreen";
import HomeScreen from "./Screens/Homescreen";
import Chat from "./Screens/Chat";
import TerminScreen from "./Screens/TerminScreen";
import Einstellungen from "./Screens/Einstellungen";
const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Stats" component={StatsScreen} />
                <Stack.Screen name="Profil" component={ProfilScreen} />
                <Stack.Screen name="Chats" component={Chat}/>
                <Stack.Screen name="Termine" component={TerminScreen}/>
                <Stack.Screen name="Einstellungen" component={Einstellungen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


