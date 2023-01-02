import {Pressable, Text, View} from "react-native";

export default function NavigationButtons() {
    return (
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
        )
}