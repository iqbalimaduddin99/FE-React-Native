import React from "react";
import ToDoApp from "../components/ToDoApp";

export default function Done({route, navigation}) {
  return (
    <>
      <ToDoApp route={route} navigation={navigation}/>
    </>
  );
}
