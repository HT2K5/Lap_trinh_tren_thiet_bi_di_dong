import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider, AppContext } from "./AppContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

function AppNavigator() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}