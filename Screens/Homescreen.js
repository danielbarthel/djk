import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList, TextInput} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.djkHeader}>DJK Nieder-Olm</Text>
                <Pressable style={styles.ProfileButton}><Text>Chat</Text></Pressable>
            </View>
            <View>
                <Text style={styles.header}>News</Text>
            </View>
            <View style={{height: 600, alignItems:"center"}}>
                <ScrollView>
                    <Image style={styles.image} source={require('../assets/1.png')}/>
                    <Image style={styles.image} source={require('../assets/2.png')}/>
                    <Image style={styles.image} source={require('../assets/3.png')}/>
                    <Image style={styles.image} source={require('../assets/4.png')}/>
                    <Image style={styles.image} source={require('../assets/Heimspiel.png')}/>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Stats')}>
                    <Text style={styles.buttonText}>Stats</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Home</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Profil')}>Profil</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(191,255,194,0.49)',
    },
    djkHeader: {
        width: 300,
        textAlign: "left",
        color: '#000',
        fontSize: 40,
        marginTop: 50,
        marginLeft: 20,
    },
    header: {
        textAlign: "center",
        color: '#000',
        fontSize: 50,
    },
    image: {
        width: 350,
        height: 350,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        margin: 5,
        justifyContent: 'center',
        width: '30%',
        backgroundColor: 'rgba(115,155,118,0.49)',
        height: 50,
        borderRadius: 25,
        marginBottom: 10
    },
    buttonText: {
        color: '#000',
        textAlign: "center",
        justifyContent: 'center'
    },
    ProfileButton: {
        marginTop: -50,
        marginLeft: 320,
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems:"center",
    }
});