import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.sub}>Nhập email để nhận hướng dẫn đặt lại mật khẩu.</Text>
      <Text style={styles.label}>Email ID</Text>
      <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Đã gửi", "Kiểm tra email của bạn.", [{ text: "OK", onPress: () => navigation.goBack() }])}
      >
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0", paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: "700", color: "#222", marginBottom: 8 },
  sub: { fontSize: 14, color: "#666", marginBottom: 28, lineHeight: 20 },
  label: { fontSize: 14, color: "#333", marginBottom: 6 },
  input: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, borderWidth: 1, borderColor: "#e0e0e0", marginBottom: 20 },
  button: { backgroundColor: "#F5A623", borderRadius: 8, paddingVertical: 14, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});