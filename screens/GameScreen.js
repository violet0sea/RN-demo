import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";

import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rand;
  }
};

const GameScreen = props => {
  const { userChoice, onGameOver } = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [round, setRound] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    console.log(direction);
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }

    if (direction === "greater") {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRound(currentRound => currentRound + 1);
  };

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(round);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <View style={styles.selectedContent}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  selectedContent: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 8,
    marginTop: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: Colors.primary,
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
