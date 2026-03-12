import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AppContext } from "./AppContext";

export default function ProfileScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {/* Blue banner */}
      <View style={styles.banner} />

      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development,
          now i am learning React Native
        </Text>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => setIsLoggedIn(false)}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  banner: {
    height: 140,
    backgroundColor: "#40C4FF",
  },
  infoContainer: {
    alignItems: "center",
    paddingHorizontal: 32,
    paddingTop: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: "#40C4FF",
    fontWeight: "600",
    marginBottom: 12,
  },
  bio: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  signOutButton: {
    backgroundColor: "#F5A623",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 36,
  },
  signOutText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});