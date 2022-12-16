import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';

const d1image = require('./assets/Heimspiel.png')
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>DJK Nieder-Olm</Text>
      </View>
      <View>
        <Image source={d1image} style={styles.image}></Image>
      </View>
      <View style={styles.footer}>
          <Pressable style={styles.button} onPress={() => Alert.alert('BUBUUUUU')}>
              <Text style={styles.buttonText}>Stats</Text>
          </Pressable>
          <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
          </Pressable>
          <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Settings</Text>
          </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
