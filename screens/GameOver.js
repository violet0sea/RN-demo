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

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>Number of rounds: {props.round}</Text>
      <Text>User Choice: {props.userChoice}</Text>
      <Button title="New game" onPress={props.onRestart} />
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

export default GameOver;
