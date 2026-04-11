import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { COLORS } from "./theme";

export default function VerificationScreen({ navigation, route }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const phone = route?.params?.phone || "xxxxxxxx";
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Tự động qua ô tiếp theo
    if (text && index < 3) {
      inputs[index + 1].current.focus();
    }

    // Đủ 4 số tự navigate
    if (index === 3 && text) {
      const full = [...newCode.slice(0, 3), text].join("");
      if (full.length === 4) {
        setTimeout(() => navigation.navigate("SelectLocation"), 350);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    // Backspace quay lại ô trước
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const codeStr = code.join("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>

        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text style={styles.subtitle}>Code</Text>

        {/* 4 ô nhập code */}
        <View style={styles.codeRow}>
          {[0, 1, 2, 3].map((i) => (
            <TextInput
              key={i}
              ref={inputs[i]}
              style={[styles.codeInput, code[i] && styles.codeInputFilled]}
              value={code[i]}
              onChangeText={(text) => handleChange(text.slice(-1), i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={i === 0}
              textAlign="center"
              selectionColor={COLORS.primary}
            />
          ))}
        </View>

        {/* Footer: Resend + Next button cùng hàng */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            activeOpacity={1}
            onPress={() =>
              codeStr.length === 4 && navigation.navigate("SelectLocation")
            }
          >
            <Text style={styles.nextArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  studentBadge: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 20,
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  studentText: { fontWeight: "700", fontSize: 13, color: "#333" },
  back: {
    paddingLeft: 20,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },
  backIcon: { fontSize: 38, color: "#181725", lineHeight: 38 },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#181725",
    paddingHorizontal: 28,
    marginBottom: 50,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    paddingHorizontal: 28,
    marginBottom: 32,
  },
  codeRow: {
    flexDirection: "row",
    paddingHorizontal: 28,
    gap: 16,
  },
  codeInput: {
    flex: 1,
    height: 22,
    borderBottomWidth: 0.5,
    borderColor: "#E2E2E2",
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  codeInputFilled: {
    borderColor: COLORS.primary,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 28,
    paddingBottom: 24,
  },
  resendText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 15,
  },
  nextBtn: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  nextArrow: { fontSize: 38, color: "#fff", lineHeight: 38, textAlign: "center" },
});