import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("Hung Nguyen");
  const [role, setRole] = useState("Mobile developer");
  const [bio, setBio] = useState("I have above 5 years of experience in native mobile apps development, now i am learning React Native");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Role</Text>
      <TextInput style={styles.input} value={role} onChangeText={setRole} />
      <Text style={styles.label}>Bio</Text>
      <TextInput style={[styles.input, { height: 100, textAlignVertical: "top" }]} value={bio} onChangeText={setBio} multiline />
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => Alert.alert("Thành công", "Đã lưu thông tin", [{ text: "OK", onPress: () => navigation.goBack() }])}
      >
        <Text style={styles.saveText}>Lưu thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0", padding: 24 },
  label: { fontSize: 14, color: "#333", marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: "#333", borderWidth: 1, borderColor: "#e0e0e0" },
  saveBtn: { backgroundColor: "#F5A623", borderRadius: 8, paddingVertical: 14, alignItems: "center", marginTop: 28 },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});