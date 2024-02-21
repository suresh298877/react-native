import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={({pressed})=>pressed ? [styles.bgColor, styles.opacity]:{overflow : 'hidden'}} onPress={onPress} android_ripple={{ color: 'red' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#3D82ED",
        borderRadius: 28,
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
        overflow : 'hidden'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
    },
    opacity: {
        opacity: 0.8,
    },
    bgColor: {
        backgroundColor : 'yellow',
    }
})