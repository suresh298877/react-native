import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View, useWindowDimensions } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number between 0 and 100', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onPickNumber(enteredNumber);
    }

    const marginTopDistance = height < 400 ? 30 : 100;
    return (
        <ScrollView style={styles.rootContainer}>
            <KeyboardAvoidingView style={styles.rootContainer} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance, alignItems : 'center' }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={2}
                            style={styles.numberInput}
                            autoFocus={true}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop:deviceHeight<400? 30: 100,
        // alignItems: 'center',
    },

    numberInput: {
        padding: 8,
        height: 50,
        width: '23%',
        fontSize: 32,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        borderTopWidth: 1,
        borderTopColor: 'white',
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        // backgroundColor :
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default StartGameScreen;
