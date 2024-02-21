import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);



    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }



    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds)
    };

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} onStartNewgame={startNewGameHandler} roundsNumber={guessRounds} />
    }


    return (
        <>
        <StatusBar style="light" />
        <LinearGradient colors={["#ecd696", "#df7fb8"]} style={styles.rootElement}>
            <ImageBackground
                source={require("./assets/images/dice.jpg")}
                style={styles.rootElement}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}
            >
                <StatusBar />
                <SafeAreaView style={styles.rootElement}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootElement: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
