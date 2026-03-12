import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}