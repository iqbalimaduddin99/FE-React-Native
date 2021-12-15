import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheckCircle,
  faLaptopHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import Modal from "./atoms/Modal";

const ToDoApp = ({ route, navigation }) => {
  const [data, setData] = useState();
  const [dataModal, setDataModal] = useState();
  const [idCard, setId] = useState();
  const [update, setUpdate] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/toDo");
      setData(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(async () => {
    getData();
  }, [update]);
  
  const onPressCheck = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/toDoCheck/${id}`);
      setUpdate(!update);
    } catch (error) {
      console.log(error.response);
    }
  };
  const onPressSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ text: textInputValue });
      console.log(body);
      await axios.post(`http://localhost:5000/api/v1/toDo`, body, config);
      setUpdate(!update);
      setTextInputValue("");
    } catch (error) {
      console.log(error.response);
    }
  };
  const onPressDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/toDo/${id}`);
      setUpdate(!update);
    } catch (error) {
      console.log(error.response);
    }
  };
  const onPressEdit = async (item) => {
    try {
      setId(item.id);
      setDataModal(item.text);
      setModalVisible(!modalVisible);
      const response = await axios.patch("http://localhost:5000/api/v1/toDo");
      setUpdate(!update);
    } catch (error) {
      console.log(error.response);
    }
  };
  let dataFilter;
  if (route?.name === "Not Done") {
    dataFilter = data?.filter((item) => item.checkList === false);
  } else if (route?.name === "Done") {
    dataFilter = data?.filter((item) => item.checkList === true);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.buttonrow}>
          {item.checkList === true ? (
            <TouchableOpacity
              onPress={() => {
                onPressCheck(item.id);
              }}
              style={styles.check}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                onPressCheck(item.id);
              }}
              style={styles.check}
            >
              <FontAwesomeIcon icon={faCircle} />
            </TouchableOpacity>
          )}
          <Text style={styles.card_Text}>{item.text}</Text>
        </View>
        {route?.name === "Not Done" ? (
          <View style={styles.buttonrow}>
            <TouchableOpacity
              onPress={() => {
                onPressEdit(item);
              }}
              style={styles.checkedit}
            >
              <FontAwesomeIcon icon={faEdit} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressDelete(item.id);
              }}
              style={styles.checktrash}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonrow}>
            <TouchableOpacity
              onPress={() => {
                onPressDelete(item.id);
              }}
              style={styles.checktrash}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Modal
          dataModal={dataModal}
          setUpdate={setUpdate}
          update={update}
          idCard={idCard}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {route?.name === "Not Done" ? (
          <View style={styles.title}>
            <Text style={styles.textTitle}>Not Done</Text>
          </View>
        ) : (
          <View style={styles.title}>
            <Text style={styles.textTitle}>Done</Text>
          </View>
        )}
        <FlatList
          style={styles.flat}
          data={dataFilter}
          renderItem={renderItem}
        />
        {route?.name === "Not Done" ? (
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
              <Text>Add To Do</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}

        <View style={styles.view}>
          <TouchableOpacity
            style={styles.buttonnavigate}
            onPress={() => {
              navigation.navigate("Not Done");
              setUpdate(!update);
            }}
          >
            <Text>Not Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonnavigate}
            onPress={() => {
              navigation.navigate("Done");
              setUpdate(!update);
            }}
          >
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default ToDoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
    alignItems: "center",
    minHeight: "100vh",
  },
  flat: {
    width: "90%",
  },
  card: {
    // width: "90%",
    minHeight: "50px",
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    marginTop: "40px",
    borderRadius: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card_Text: {
    fontWeight: "500",
    marginStart: "20px",
    fontSize: "18px",
  },
  input: {
    width: "70%",
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
    width: "30%",
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
  buttonnavigate: {
    width: "40%",
    minHeight: "50px",
    backgroundColor: "white",
    marginTop: "40px",
    borderRadius: "10px",
    borderColor: "#4cb6c2",
    margin: "20px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "18px",
  },
  view: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  optional: {
    width: "90%",
    flexDirection: "row",
    position: "absolute",
    bottom: 120,
  },
  buttonrow: {
    flexDirection: "row",
  },
  check: {
    cursor: "pointer",
    fontSize: "18px",
    paddingTop: "4px",
    paddingStart: "20px",
    alignItems: "center",
  },
  checktrash: {
    marginEnd: "30px",
    fontSize: "18px",
    alignItems: "center",
    cursor: "pointer",
  },
  checkedit: {
    marginEnd: "24px",
    fontSize: "18px",
    alignItems: "center",
    cursor: "pointer",
  },
  textTitle: {
    color: "whitesmoke",
    marginTop: "30px",
    fontSize: "30px",
    fontWeight: "700",
  },
  modal: {
    width: "100%",
    position: "absolute",
    marginTop: "400px",
  },
  overlay: {
    width: "100%",
    position: "absolute",
    marginTop: "400px",
  },
});
