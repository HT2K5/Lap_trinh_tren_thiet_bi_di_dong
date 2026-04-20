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
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { saveUser } from "./storage";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailOk = email.includes("@") && email.length > 4;

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (!emailOk) {
      setError("Email không hợp lệ");
      return;
    }
    try {
      setLoading(true);
      setError("");

      // Giả lập đăng ký
      await new Promise(r => setTimeout(r, 800));

      const user = {
        email,
        name: username,
        token: "mock_token_" + Date.now(),
      };

      await saveUser(user);
      navigation.replace("Main");
    } catch (e) {
      setError("Đăng ký thất bại");
      console.error("signup error:", e);
    } finally {
      setLoading(false);
    }
  };

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

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                { flex: 1, borderWidth: 0, marginBottom: 0 },
              ]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailOk && (
              <Ionicons
                name="checkmark-circle"
                size={22}
                color="#53B175"
                style={{ paddingRight: 14 }}
              />
            )}
          </View>
          <View style={{ height: 20 }} />

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                { flex: 1, borderWidth: 0, marginBottom: 0 },
              ]}
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
          <View style={{ height: 20 }} />

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <Text style={styles.terms}>
            By continuing you agree to our{" "}
            <Text style={styles.link}>Terms of Service </Text>
            {"\n"}and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>

          <TouchableOpacity
            style={[styles.signupBtn, loading && { opacity: 0.7 }]}
            onPress={handleSignUp}
            disabled={loading}
            activeOpacity={1}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.signupText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={{ color: "black", fontSize: 14, fontWeight: "600" }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ color: "#53B175", fontWeight: "700", fontSize: 14 }}
              >
                Signin
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
  logoRow: { alignItems: "center", marginVertical: 24 },
  logoImg: { width: 60, height: 60 },
  title: { fontSize: 28, fontWeight: "400", color: "#181725", marginBottom: 20 },
  subtitle: { fontSize: 14, color: "#7C7C7C", marginBottom: 28 },
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    backgroundColor: "#FAFAFA",
    paddingRight: 4,
  },
  errorText: {
    color: "#F4613A",
    fontSize: 13,
    marginBottom: 12,
  },
  terms: {
    fontSize: 13,
    color: "#7C7C7C",
    lineHeight: 20,
    marginBottom: 24,
    marginLeft: 10,
  },
  link: { color: "#53B175", fontWeight: "700" },
  signupBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 24,
    elevation: 4,
  },
  signupText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  footer: { flexDirection: "row", justifyContent: "center" },
});