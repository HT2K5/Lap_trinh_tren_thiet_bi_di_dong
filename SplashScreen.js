import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const STUDENT_NAME = "Trần Minh Hiếu";
const STUDENT_ID = "23810310175";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("Onboarding"), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#53B175" />

      {/* Student badge */}
      <View style={styles.studentBadge}>
        <Text style={styles.studentName}>{STUDENT_NAME}</Text>
        <Text style={styles.studentId}>{STUDENT_ID}</Text>
      </View>

      {/* Logo nectar */}
      <View style={styles.logoWrap}>
        <Image
          source={require("./assets/nectar_logo.png")}
          style={styles.logoImg}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53B175",
  },
  studentBadge: {
    position: "absolute",
    top: 60,
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  studentName: { color: "#fff", fontWeight: "700", fontSize: 14 },
  studentId: { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
  logoWrap: { alignItems: "center" },
  logoImg: { width: 300, height: 100 },
});
