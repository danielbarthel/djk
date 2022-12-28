import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DropDownPicker from 'react-native-dropdown-picker';
import {useEffect, useState} from "react";
import Anmeldescreen from "./Anmeldescreen";
const Stack = createNativeStackNavigator();
export default function ProfilScreen() {
    const [user, setUser] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch('http://134.93.96.120:3000/api/data?user_nummer=6');
            const data = await res.json();
            setUser(data.user);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []); // der leere Array-Parameter sorgt dafür, dass die Funktion nur einmal beim Rendern der Komponente aufgerufen wird
        const angemeldet = true;
        if (angemeldet == false) {
            return (
                <Anmeldescreen />
            )
        } else {
            return (
                <View>
                    <Text>Hallo</Text>
                    {user && <Text>Benutzer: {user.vorname}</Text>}
                    <Text>!</Text>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(9,175,83,0.49)',
    },

    input: {
        color: '#000',
        width: 300,
        height:50,
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 10,
        paddingLeft: 10,
    },

    header: {
        textAlign: "center",
        color: '#fff',
        fontSize: 50,
        marginTop: 50,
    },

    dropdownwindow: {
        paddingLeft: 10,
        backgroundColor: '#707070',
    },

    dropdown: {
        marginTop: 30,

        width: 150,
        flexDirection: "row",
    }
})