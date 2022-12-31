import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DropDownPicker from 'react-native-dropdown-picker';
import {useEffect, useState} from "react";
import Anmeldescreen from "./Anmeldescreen";
const Stack = createNativeStackNavigator();
export default function ProfilScreen() {
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
                    <Pressable style={styles.pressable}>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
    },
    buttonText: {
        color: '#000',
        textAlign: "center",
    },
})