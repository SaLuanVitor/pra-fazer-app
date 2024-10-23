import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>Sobre o App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})