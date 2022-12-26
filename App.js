import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfilScreen from './Profil';
import StatsScreen from "./Statsscreen";
import HomeScreen from "./Homescreen";
const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Stats" component={StatsScreen} />
                <Stack.Screen name="Profil" component={ProfilScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


