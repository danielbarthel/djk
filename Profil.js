import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, Pressable, Alert, ScrollView, FlatList, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DropDownPicker from 'react-native-dropdown-picker';
import {useEffect, useState} from "react";
const Stack = createNativeStackNavigator();
export default function ProfilScreen() {
        const angemeldet = true;
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
            {label: 'u10', value: 'u10'},
            {label: 'u12', value: 'u12'}
        ]);
        if (angemeldet == true) {
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Registrieren</Text>
                    </View>
                    <View>
                        <TextInput style={styles.input} placeholder="Vorname"></TextInput>
                        <TextInput style={styles.input} placeholder="Nachname"></TextInput>
                        <TextInput style={styles.input} placeholder="Geburtsdatum"></TextInput>
                        <View style={styles.dropdown}>
                            <DropDownPicker style={styles.dropdownwindow} open={open} value={value} items={items}
                                        setOpen={setOpen}
                                        setValue={setValue} setItems={setItems}/>
                            <DropDownPicker style={styles.dropdownwindow} open={open} value={'Team'} items={items}
                                        setOpen={setOpen}
                                        setValue={setValue} setItems={setItems}/>
                        </View>
                        <TextInput style={styles.input} placeholder="Email Adresse"></TextInput>
                        <TextInput style={styles.input} placeholder="Passwort"></TextInput>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Hallo</Text>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: '#707070',
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