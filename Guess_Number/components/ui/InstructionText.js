import {Text, StyleSheet} from "react-native";
function InstructionText({children,style}){
    return (
        <Text style={[styles.textInstruction,style]}>{children}</Text>
    )
}

export default InstructionText;
const styles=StyleSheet.create({
    textInstruction :{
        color : 'white',
        fontSize : 28,
        fontFamily : "open-sans",
    },
})