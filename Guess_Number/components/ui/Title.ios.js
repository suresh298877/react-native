import { Text, StyleSheet, Platform } from "react-native";
function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;
const styles=StyleSheet.create({
    title : {
        fontFamily :'open-sans-bold',
        fontSize : 24,
        // fontWeight : 'bold',
        color : 'red',
        borderColor : 'yellow',
        // borderWidth : Platform.OS === 'android' ? 0 : 2,
        // borderWidth : Platform.select({ios : 0, android : 2}),
        textAlign : 'center',
        padding : 12,
        maxWidth:'70%'

    }
})