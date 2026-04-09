import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AppContext } from "./AppContext";

export default function ProfileScreen({ navigation }) {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now i am learning React Native
        </Text>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("EditProfile")}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0" },
  banner: { height: 160, backgroundColor: "#40C4FF", alignItems: "center", justifyContent: "flex-end" },
  avatar: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: "#fff", position: "absolute", bottom: -45 },
  infoContainer: { alignItems: "center", paddingHorizontal: 32, paddingTop: 60 },
  name: { fontSize: 20, fontWeight: "700", color: "#222", marginBottom: 4 },
  role: { fontSize: 14, color: "#40C4FF", fontWeight: "600", marginBottom: 12 },
  bio: { fontSize: 13, color: "#666", textAlign: "center", lineHeight: 20, marginBottom: 24 },
  editButton: { borderWidth: 1.5, borderColor: "#F5A623", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 36, marginBottom: 12 },
  editText: { color: "#F5A623", fontSize: 15, fontWeight: "700" },
  signOutButton: { backgroundColor: "#F5A623", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 36 },
  signOutText: { color: "#fff", fontSize: 15, fontWeight: "700" },
});