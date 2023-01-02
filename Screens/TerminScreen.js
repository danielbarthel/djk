import {View, Text, StyleSheet, Linking} from "react-native";
import {useEffect, useState} from "react";
import {json} from "express";

function openMap() {
    Linking.openURL("https://www.google.de/maps/place/Heinz-Kerz-Sporthalle/@49.9000306,8.1936129,17z/data=!3m1!4b1!4m5!3m4!1s0x47bd91fb47de5dcf:0x23dcd809e8bca627!8m2!3d49.9000272!4d8.1958016?hl=de");
}
export default function TerminScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Deine {} Termine</Text>
            </View>
            <View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(191,255,194,0.49)',
    },

    header: {
        textAlign: "center",
        color: '#000',
        fontSize: 50,
        marginTop: 50,
    },
    termin: {
            textAlign: "center",
        },
    terminbox: {
        borderRadius: 25,
        borderWidth: 0.5,
        width: 300,
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
        marginBottom: 20,
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