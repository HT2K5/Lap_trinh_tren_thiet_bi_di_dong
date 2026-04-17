import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPass, setShowPass] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.studentBadge}>
            <Text style={styles.studentText}>Trần Minh Hiếu</Text>
          </View>

          <View style={styles.logoRow}>
            <Image
              source={require("./assets/carrot_orange.png")}
              style={styles.logoImg}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your emails and password</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passRow}>
            <TextInput
              style={[styles.input, { flex: 1, borderWidth: 0, marginBottom: 0 }]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={{ padding: 10, paddingRight: 14 }}
            >
              <Ionicons
                name={showPass ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="#7C7C7C"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Onboarding")}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={{ color: "#7C7C7C", fontSize: 14 }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "#53B175", fontWeight: "700", fontSize: 14 }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { paddingHorizontal: 28, paddingBottom: 40 },
  studentBadge: {
    alignSelf: "flex-end",
    marginTop: 16,
    marginBottom: 4,
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  studentText: { fontWeight: "700", fontSize: 13, color: "#333" },
  logoRow: { alignItems: "center", marginVertical: 28 },
  logoImg: { width: 60, height: 60 },
  title: { fontSize: 28, fontWeight: "500", color: "#181725", marginBottom: 20 },
  subtitle: { fontSize: 14, color: "#7C7C7C", marginBottom: 32 },
  label: { fontSize: 14, color: "#7C7C7C", fontWeight: "600", marginBottom: 8 },
  input: {
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 15,
    color: "#181725",
    marginBottom: 20,
    backgroundColor: "#FAFAFA",
  },
  passRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    backgroundColor: "#FAFAFA",
    paddingRight: 4,
    marginBottom: 12,
  },
  forgotBtn: { alignSelf: "flex-end", marginBottom: 28 },
  forgotText: { color: "black", fontWeight: "400", fontSize: 14 },
  loginBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 24,
    elevation: 4,
  },
  loginText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  footer: { flexDirection: "row", justifyContent: "center" },
});