import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculate from "./src/components/Calculate";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NativeBaseProvider } from "native-base";
import Done from "./src/pages/Done";
import NotDone from "./src/pages/NotDone";
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Todo() {
  return (
    <HomeStack.Navigator screenOptions={() => ({ headerShown: false })}>
      <HomeStack.Screen name="Not Done" component={NotDone} />
      <HomeStack.Screen name="Done" component={Done} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <StatusBar style="auto" />

          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "To Do Page") {
                  iconName = focused ? "ios-list" : "ios-list-outline";
                } else if (route.name === "Calculator") {
                  iconName = focused ? "calculator" : "calculator-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "red",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="To Do Page" component={Todo} />
            <Tab.Screen name="Calculator" component={Calculate} />
          </Tab.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
});
