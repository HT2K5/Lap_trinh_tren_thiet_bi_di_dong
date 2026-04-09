import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />

      <Text style={styles.label}>Email ID</Text>
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Thành công", "Tạo tài khoản thành công!", [
          { text: "OK", onPress: () => navigation.navigate("SignIn") },
        ])}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already a member?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignIn")}>Sign In</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#f0f0f0", paddingHorizontal: 24, paddingTop: 40, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: "700", color: "#222", textAlign: "center", marginBottom: 32 },
  label: { fontSize: 14, color: "#333", marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: "#333", borderWidth: 1, borderColor: "#e0e0e0" },
  button: { backgroundColor: "#F5A623", borderRadius: 8, paddingVertical: 14, alignItems: "center", marginTop: 24, marginBottom: 16 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  footer: { textAlign: "center", fontSize: 13, color: "#555" },
  link: { color: "#F5A623", fontWeight: "600" },
});