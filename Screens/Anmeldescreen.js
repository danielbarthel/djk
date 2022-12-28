import {Pressable, StyleSheet, Text, TextInput, View, Picker, Button} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, {useState} from "react";
import {Dropdown} from "react-native-element-dropdown";
export default function Anmeldescreen() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    let dataTeam = [
        {label:'u10', value:'u10'},
        {key:'u12mix1', value:'u12mix1'},
        {label:'u12mix2', value:'u12mix2'},
        {label:'u14w', value:'u14w'},
        {label:'u14m1', value:'u14m1'},
        {label:'u14m2', value:'u14m2'},
        {label:'u16w', value:'u16w'},
        {label:'u16m1', value:'u16m1'},
        {label:'u16m2', value:'u16m2'},

    ];
    let dataRolle = [
        {label:'Trainer', value:'trainer'},
        {key:'Spieler', value:'spieler'},
        {key:'Schiedsrichter', value:'schiedsrichter'},

    ];
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [geburtsdatum, setGeburtsdatum] = useState('');
    const sendData = () => {
        // Senden Sie die Daten an den Express-Server
        fetch('http://134.93.96.120:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                vorname: vorname,
                nachname: nachname,
                geburtsdatum: geburtsdatum,
            }),
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };
    return(
        <View style={styles.container}>
        <View>
            <Text style={styles.header}>Registrieren</Text>
        </View>
        <View>
            <TextInput
                style={styles.input}
                value={vorname}
                onChangeText={text => setVorname(text)}
                placeholder="Vorname"
            />
            <TextInput
                style={styles.input}
                value={nachname}
                onChangeText={text => setNachname(text)}
                placeholder="Lastname"
            />
            <TextInput
                style={styles.input}
                value={geburtsdatum}
                onChangeText={text => setGeburtsdatum(text)}
                placeholder="Geburtsdatum"
            />
            <View style={{flexDirection: 'row'}}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataTeam}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder='Team'
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataRolle}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Rolle' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
            </View>
            <TextInput style={styles.input} placeholder="Email Adresse"></TextInput>
            <TextInput style={styles.input} placeholder="Passwort"></TextInput>
            <Button title="Senden" onPress={sendData} />
            <View style={styles.footer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Stats')}>
                    <Text style={styles.buttonText}>Stats</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText} >Home</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Profil')}>Profil</Text>
                </Pressable>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(9,175,83,0.49)',
    },

    input: {
        color: '#000',
        width: 300,
        height:50,
        borderWidth: 0.5,
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

    footer: {
        flexDirection:'row',
        marginTop: 200,
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
    },
    dropdown: {
        marginTop: 30,
        width: 150,
        height: 50,
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 10,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})