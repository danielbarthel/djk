import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useEffect, useState} from "react";
import Anmeldescreen from "./Anmeldescreen";
import HomeScreen from "./Homescreen";
import StatsScreen from "./Statsscreen";
import TerminScreen from "./TerminScreen";
import Chat from "./Chat";
import Einstellungen from "./Einstellungen";
const Stack = createNativeStackNavigator();

export default function ProfilScreen({navigation}) {
    const [vorname, setVorname] = useState('');
    useEffect(() => {
        fetch('http://134.93.96.120:3000/users')
            .then(response => response.json())
            .then(json => {
                setVorname(json.vorname);
            })
            .catch(error => console.error(error))
    }, []);
    const angemeldet = true;
        if (angemeldet == false) {
            return (
                <Anmeldescreen/>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Hallo, {vorname}</Text>
                    <Pressable style={styles.pressable}>
                        <Text style={styles.pressableText}>Deine Chats</Text>
                    </Pressable>
                    <Pressable style={styles.pressable} onPress={() => navigation.navigate('Termine')}>
                        <Text style={styles.pressableText}>Deine Termine</Text>
                    </Pressable>
                    <Pressable style={styles.pressable}>
                        <Text style={styles.pressableText}>Deine Einstellungen</Text>
                    </Pressable>
                    <Pressable style={styles.pressable}>
                        <Text style={styles.pressableText}>Deine Statistiken</Text>
                    </Pressable>
                    <View style={styles.footer}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Stats')}>
                            <Text style={styles.buttonText}>Stats</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Home</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Profil')}>
                            <Text style={styles.buttonText} >Profil</Text>
                        </Pressable>
                    </View>
                </View>

            )
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(191,255,194,0.49)',
    },

    header: {
        textAlign: "center",
        color: '#000',
        fontSize: 50,
        marginTop: 50,
    },

    pressable: {
        backgroundColor: 'rgba(115,155,118,0.49)',
        margin: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
    },

    pressableText: {
        textAlign: "center",
    },
    footer: {
        marginTop: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 20,
        justifyContent: 'center',
        width: '30%',
        backgroundColor: 'rgba(115,155,118,0.49)',
        height: 50,
        borderRadius: 25,
    },
    buttonText: {
        color: '#000',
        textAlign: "center",
        justifyContent: 'center'
    },
})