import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const d1image = require('./assets/Heimspiel.png')
const Stack = createNativeStackNavigator();


function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>DJK Nieder-Olm</Text>
            </View>
            <View>
                <Image source={d1image} style={styles.image}></Image>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Stats')}>
                    <Text style={styles.buttonText}>Stats</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Home</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Settings')}>Settings</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

function StatsScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Stats</Text>
            </View>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Stats" component={StatsScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2b2b2b',
      alignItems: 'center',
      justifyContent:'space-between'
  },
  header: {
      color: '#fff',
      fontSize: 50,
      marginTop: 50
  },
  image: {
      width: 300,
      height: 300,
      borderRadius: 10,
  },
  footer: {
      flexDirection:'row',

  },
  button: {
      margin: 5,
      justifyContent: 'center',
      width: '30%',
      backgroundColor: '#000',
      height: 50,
      borderRadius: 25,
      marginBottom: 10
  },
  buttonText: {
      color: '#fff',
      textAlign: "center",
      justifyContent: 'center'
  }
});
