import React from "react";
import ToDoApp from "../components/ToDoApp";

export default function NotDone({route, navigation}) {
  return (
    <>
      <ToDoApp route={route} navigation={navigation} />
    </>
  );
}
