import React, { useState } from "react";
import { Modal } from "native-base";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function ModalContent({
  update,
  setUpdate,
  idCard,
  modalVisible,
  setModalVisible,
  dataModal,
}) {
  const data = dataModal;
  const [textInputValue, setTextInputValue] = React.useState(data);

  const onPressSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ text: textInputValue });
      await axios.patch(
        `http://localhost:5000/api/v1/toDo/${idCard}`,
        body,
        config
      );
      setUpdate(!update);
      setModalVisible(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content style={styles.view}>
          <Modal.CloseButton />
          <Modal.Header>Edit To Do</Modal.Header>
          <Modal.Body style={styles.container}>
            <View style={styles.optional}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressSubmit()}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
    alignItems: "center",
    // minHeight: "100vh",
  },
  input: {
    width: "80%",
    minHeight: "50px",
    backgroundColor: "whitesmoke",
    marginTop: "40px",
    borderTopStartRadius: "10px",
    borderBottomStartRadius: "10px",
    borderTopEndRadius: "3px",
    borderBottomEndRadius: "3px",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: "18px",
    paddingStart: "20px",
  },
  button: {
    width: "20%",
    minHeight: "50px",
    backgroundColor: "#4cb6c2",
    marginTop: "40px",
    borderTopEndRadius: "10px",
    borderBottomEndRadius: "10px",
    borderBottomStartRadius: "3px",
    borderTopStartRadius: "3px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "18px",
  },
  optional: {
    width: "90%",
    flexDirection: "row",
    marginTop: "-30px",
  },
  view: {
    width: "90%",
    position: "absolute",
  },
});
