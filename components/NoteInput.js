import React, { useState, useCallback } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const NoteInput = props => {
  const [text, setText] = useState("");
  const noteInputHandler = text => {
    setText(text);
  };
  const addHandler = () => {
    props.onAddNote(text);
    setText("");
  };

  const cancelHandler = () => {
    props.onCancelNote();
    // setText("");
  };

  return (
    <Modal visible={props.visible} animationType="silde">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={text}
          onChangeText={noteInputHandler}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 300,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10
  },
  button: {
    width: "40%"
  }
});

export default NoteInput;
