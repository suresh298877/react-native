import {View, StyleSheet, Dimensions} from "react-native";
function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card;

const deviceWidth=Dimensions.get('window').width;

const styles=StyleSheet.create({
    inputContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth<380?18:36,
        height: 180,
        marginHorizontal: 24,
        padding: 16,
        elevation: 4,
        borderRadius: 15,
        backgroundColor: "#df7fb8",
        opacity: 0.7
    },
})