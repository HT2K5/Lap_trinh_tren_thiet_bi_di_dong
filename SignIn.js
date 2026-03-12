import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { AppContext } from "./AppContext";

export default function SignIn() {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => setIsLoggedIn(true)}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleG}>G</Text>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookF}>f</Text>
          <Text style={styles.socialTextWhite}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Not yet a member?{" "}
        <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
    marginTop: 6,
  },
  forgotText: {
    color: "#F5A623",
    fontSize: 13,
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: "#F5A623",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  orText: {
    textAlign: "center",
    color: "#555",
    fontSize: 13,
    marginBottom: 16,
    fontWeight: "500",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
  },
  googleButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 11,
    backgroundColor: "#fff",
    gap: 8,
  },
  googleG: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4285F4",
  },
  socialText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  facebookButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b5998",
    borderRadius: 8,
    paddingVertical: 11,
    gap: 8,
  },
  facebookF: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  socialTextWhite: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 13,
    color: "#555",
  },
  signUpLink: {
    color: "#F5A623",
    fontWeight: "600",
  },
});