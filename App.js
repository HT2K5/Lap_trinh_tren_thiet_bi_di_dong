import 'react-native-gesture-handler';
import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider, AppContext } from "./AppContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

function RootRouter() {
  const { isLoggedIn, restoring } = useContext(AppContext);

  if (restoring) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#F5A623" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <RootRouter />
    </AppProvider>
  );
}