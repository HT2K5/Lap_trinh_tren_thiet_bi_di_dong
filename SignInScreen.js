import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      bounces={false}
    >
      <StatusBar barStyle="dark-content" />

     
      <View style={styles.studentBadge}>
        <Text style={styles.studentText}>Trần Minh Hiếu</Text>
      </View>

      
      <View style={styles.heroWrap}>
        <Image
          source={require("./assets/groceries.png")}
          style={styles.heroImg}
          resizeMode="cover"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Get your groceries{"\n"}with nectar
      </Text>

      {/* Phone input */}
      <TouchableOpacity
        style={styles.phoneBox}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("PhoneNumber")}
      >
        <Text style={styles.flag}>🇧🇩</Text>
        <View style={styles.dividerV} />
        <Text style={styles.phoneText}>+880</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or connect with social media</Text>
        <View style={styles.line} />
      </View>

      {/* Google */}
      <TouchableOpacity
        style={[styles.socialBtn, { backgroundColor: "#5383EC" }]}
        activeOpacity={0.85}
      >
        <Text style={styles.socialIcon}>G</Text>
        <Text style={[styles.socialText, { color: "#fff" }]}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      {/* Facebook */}
      <TouchableOpacity
        style={[styles.socialBtn, { backgroundColor: "#3A5B9A" }]}
        activeOpacity={0.85}
      >
        <Text style={[styles.socialIcon, { fontStyle: "italic" }]}>f</Text>
        <Text style={[styles.socialText, { color: "#fff" }]}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { paddingBottom: 40 },
  studentBadge: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 99,
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  studentText: { fontWeight: "700", fontSize: 13, color: "#333" },
  heroWrap: {
    width: "100%",
    height: 400,
    backgroundColor: "#F5F5F5",
    overflow: "hidden",
  },
  heroImg: { width: "100%", height: "100%" },
  title: {
    fontSize: 26,
    fontWeight: "500",
    color: "#181725",
    paddingHorizontal: 28,
    marginTop: 28,
    marginBottom: 24,
    lineHeight: 34,
  },
  phoneBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 28,
    borderWidth: 1.5,
    borderColor: "#53B175",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  flag: { fontSize: 20 },
  dividerV: {
    width: 1,
    height: 20,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 12,
  },
  phoneText: { fontSize: 16, color: "#181725", fontWeight: "600" },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 22,
  },
  line: { flex: 1, height: 1, backgroundColor: "#E2E2E2" },
  orText: { marginHorizontal: 10, color: "#7C7C7C", fontSize: 13 },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 28,
    marginBottom: 16,
    paddingVertical: 16,
    borderRadius: 14,
    gap: 12,
  },
  socialIcon: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "900",
    width: 24,
    textAlign: "center",
  },
  socialText: { fontSize: 16, fontWeight: "600" },
});
