import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { VStack, Center, HStack, Stack } from "native-base";

const Calculate = () => {
  const [resultText, setResultText] = useState("");

  const btnClick = (text) => {
    if (text == "AC") {
      setResultText("");
    } else if (text == "DEL") {
      setResultText(resultText.toString().substring(0, resultText.length - 1));
    } else if (text == "=") {
      let lastOne = resultText.toString().slice(-1);
      if (
        lastOne != "+" &&
        lastOne != "-" &&
        lastOne != "*" &&
        lastOne != "/" &&
        lastOne != "." &&
        lastOne != "%"
      ) {
        setResultText(eval(resultText).toString());
      }
    } else {
      setResultText(resultText.toString() + text);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{resultText}</Text>
        <Stack top={30} space={1} alignItems="center">
          <HStack paddingBottom={2} space={4} alignItems="center">
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                onPress={() => {
                  btnClick("DEL");
                }}
              >
                <Center
                  size={16}
                  width={200}
                  bg="#7d9de8"
                  rounded="md"
                  shadow={3}
                >
                  <Text style={styles.number}>DEL</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("AC");
              }}
            >
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>AC</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack paddingBottom={2} space={4} alignItems="center">
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                style={styles.number}
                onPress={() => {
                  btnClick(1);
                }}
              >
                <Center
                  size={16}
                  bg="#7d9de8"
                  rounded="md"
                  _text={{
                    color: "white",
                  }}
                  shadow={3}
                >
                  <Text style={styles.number}>1</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick(2);
              }}
            >
              <Center
                size={16}
                bg="#7d9de8"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>2</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("-");
              }}
            >
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>-</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("+");
              }}
            >
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>+</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack paddingBottom={2} space={4} alignItems="center">
            <VStack>
              {" "}
              <TouchableOpacity
                style={styles.number}
                onPress={() => {
                  btnClick(3);
                }}
              >
                <Center
                  size={16}
                  bg="#7d9de8"
                  rounded="md"
                  _text={{
                    color: "white",
                  }}
                  shadow={3}
                  onPress={() => {
                    btnClick(3);
                  }}
                >
                  <Text style={styles.number}>3</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
            <VStack>
              {" "}
              <TouchableOpacity
                style={styles.number}
                onPress={() => {
                  btnClick(4);
                }}
              >
                <Center
                  size={16}
                  bg="#7d9de8"
                  rounded="md"
                  _text={{
                    color: "white",
                  }}
                  shadow={3}
                >
                  <Text style={styles.number}>4</Text>
                </Center>
              </TouchableOpacity>
            </VStack>
            <TouchableOpacity
              onPress={() => {
                btnClick("/");
              }}
            >
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>/</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("*");
              }}
            >
              {" "}
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
                o
              >
                <Text style={styles.number}>*</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack paddingBottom={2} space={4} alignItems="center">
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                style={styles.number}
                onPress={() => {
                  btnClick(5);
                }}
              >
                <Center
                  size={16}
                  bg="#7d9de8"
                  rounded="md"
                  _text={{
                    color: "white",
                  }}
                  shadow={3}
                >
                  <Text style={styles.number}>5</Text>
                </Center>
              </TouchableOpacity>
            </VStack>

            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick(6);
              }}
            >
              {" "}
              <Center
                size={16}
                bg="#7d9de8"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>6</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("%");
              }}
            >
              {" "}
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>%</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick("=");
              }}
            >
              {" "}
              <Center
                size={16}
                bg="#284b9e"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>=</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack paddingBottom={2} space={4} alignItems="center">
            <VStack space={4} alignItems="center">
              <TouchableOpacity
                style={styles.number}
                onPress={() => {
                  btnClick(7);
                }}
              >
                <Center
                  size={16}
                  bg="#7d9de8"
                  rounded="md"
                  _text={{
                    color: "white",
                  }}
                  shadow={3}
                >
                  <Text style={styles.number}>7</Text>
                </Center>
              </TouchableOpacity>
            </VStack>

            <TouchableOpacity
              style={styles.number}
              onPress={() => {
                btnClick(8);
              }}
            >
              {" "}
              <Center
                size={16}
                bg="#7d9de8"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>8</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                btnClick(9);
              }}
            >
              <Center
                size={16}
                bg="#7d9de8"
                rounded="md"
                _text={{
                  color: "white",
                }}
                shadow={3}
              >
                <Text style={styles.number}>9</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                btnClick(0);
              }}
            >
              <Center size={16} bg="#7d9de8" rounded="md" shadow={3}>
                <Text style={styles.number}>0</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
        </Stack>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "midnightblue",
  },
  title: {
    marginTop: 16,
    paddingTop: 11,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#e3ebff",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    height: 70,
  },
  number: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Calculate;
