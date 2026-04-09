import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { AppContext } from "./AppContext";

function CustomTextInput({ label, placeholder, value, onChangeText, secureTextEntry, keyboardType }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
}

function IconButton({ label, icon, onPress, style, labelStyle }) {
  return (
    <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
      <Text style={[styles.iconText, { color: labelStyle?.color === "#fff" ? "#fff" : "#4285F4" }]}>{icon}</Text>
      <Text style={[styles.iconLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function SignIn({ navigation }) {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập email và mật khẩu");
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput label="Email ID" placeholder="Enter your email here!" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomTextInput label="Password" placeholder="Enter your password here!" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotText}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <IconButton label="Google" icon="G" style={styles.googleButton} labelStyle={{ color: "#333" }} onPress={() => Alert.alert("Google")} />
        <IconButton label="Facebook" icon="f" style={styles.facebookButton} labelStyle={{ color: "#fff" }} onPress={() => Alert.alert("Facebook")} />
      </View>

      <Text style={styles.signUpText}>
        Not yet a member?{" "}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#f0f0f0", paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  title: { fontSize: 26, fontWeight: "700", color: "#222", textAlign: "center", marginBottom: 32 },
  label: { fontSize: 14, color: "#333", marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: "#333", borderWidth: 1, borderColor: "#e0e0e0", marginBottom: 4 },
  forgotContainer: { alignItems: "flex-end", marginBottom: 20, marginTop: 6 },
  forgotText: { color: "#F5A623", fontSize: 13, fontWeight: "500" },
  signInButton: { backgroundColor: "#F5A623", borderRadius: 8, paddingVertical: 14, alignItems: "center", marginBottom: 20 },
  signInButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  orText: { textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16, fontWeight: "500" },
  socialRow: { flexDirection: "row", gap: 12, marginBottom: 24 },
  iconButton: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: 8, paddingVertical: 11, gap: 8 },
  iconText: { fontSize: 16, fontWeight: "700" },
  iconLabel: { fontSize: 14, fontWeight: "500" },
  googleButton: { borderWidth: 1.5, borderColor: "#ddd", backgroundColor: "#fff" },
  facebookButton: { backgroundColor: "#3b5998" },
  signUpText: { textAlign: "center", fontSize: 13, color: "#555" },
  signUpLink: { color: "#F5A623", fontWeight: "600" },
});