import React, { useState } from "react";
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

export default function PhoneNumberScreen({ navigation }) {
  const [phone, setPhone] = useState("");

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

        <Text style={styles.title}>Enter your mobile number</Text>

        <Text style={styles.inputLabel}>Mobile Number</Text>

        <View style={styles.inputRow}>
          <Text style={styles.flag}>🇧🇩</Text>
          <View style={styles.dividerV} />
          <Text style={styles.code}>+880</Text>
          <TextInput
            style={styles.phoneInput}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            maxLength={10}
            placeholder="xxxxxxxx"
            placeholderTextColor="#ccc"
            autoFocus
          />
        </View>

        {/* Nút nằm dưới cùng, đẩy lên trên bàn phím */}
        <View style={styles.footer}>
          <TouchableOpacity
  style={styles.nextBtn}
  onPress={() =>
    phone.length >= 6 &&
    navigation.navigate("Verification", { phone })
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
    fontSize: 30,
    fontWeight: "400",
    color: "#181725",
    paddingHorizontal: 28,
    marginBottom: 30,
    marginTop: 50,
  },
  inputLabel: {
    fontSize: 13,
    color: "#7C7C7C",
    paddingHorizontal: 28,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 28,
    borderWidth: 1.5,
    borderColor: "#53B175",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 8,
  },
  flag: { fontSize: 22 },
  dividerV: {
    width: 1,
    height: 22,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 4,
  },
  code: { fontSize: 16, fontWeight: "600", color: "#181725" },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    letterSpacing: 2,
    paddingVertical: 0,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 28,
    paddingBottom: 24,
  },
  nextBtn: {
  width: 62,
  height: 62,
  borderRadius: 31,
  backgroundColor: "#53B175", 
  justifyContent: "center",
  alignItems: "center",
  elevation: 6,
  opacity: 1,
  shadowColor: "#53B175",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.4,
  shadowRadius: 8,
},
  nextArrow: { fontSize: 38, color: "#fff", lineHeight: 42 },
});