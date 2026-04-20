import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ZONES = ["Banasree", "Gulshan", "Dhanmondi", "Mirpur", "Uttara"];
const AREAS = ["Block A", "Block B", "Block C", "Block D", "Road 1", "Road 2"];

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");
  const [openZone, setOpenZone] = useState(false);
  const [openArea, setOpenArea] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.studentBadge}>
        <Text style={styles.studentText}>Trần Minh Hiếu</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        {/* Map illustration */}
        <View style={styles.mapWrap}>
          <Image
            source={require("./assets/map_illustration.png")}
            style={styles.mapImg}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with{"\n"}
          what's happening in your area
        </Text>

        {/* Zone */}
        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setOpenZone(!openZone);
            setOpenArea(false);
          }}
        >
          <Text style={styles.dropVal}>{zone}</Text>
          <Text style={styles.arrow}>{openZone ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {openZone && (
          <View style={styles.list}>
            {ZONES.map(z => (
              <TouchableOpacity
                key={z}
                style={styles.listItem}
                onPress={() => {
                  setZone(z);
                  setOpenZone(false);
                }}
              >
                <Text
                  style={[
                    styles.listText,
                    zone === z && { color: "#53B175", fontWeight: "700" },
                  ]}
                >
                  {z}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Area */}
        <Text style={[styles.label, { marginTop: 18 }]}>Your Area</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setOpenArea(!openArea);
            setOpenZone(false);
          }}
        >
          <Text style={[styles.dropVal, !area && { color: "#bbb" }]}>
            {area || "Types of your area"}
          </Text>
          <Text style={styles.arrow}>{openArea ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {openArea && (
          <View style={styles.list}>
            {AREAS.map(a => (
              <TouchableOpacity
                key={a}
                style={styles.listItem}
                onPress={() => {
                  setArea(a);
                  setOpenArea(false);
                }}
              >
                <Text
                  style={[
                    styles.listText,
                    area === a && { color: "#53B175", fontWeight: "700" },
                  ]}
                >
                  {a}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Submit → Login */}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { paddingHorizontal: 28, paddingBottom: 40 },
  studentBadge: {
    position: "absolute",
    top: 55,
    right: 20,
    zIndex: 99,
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  studentText: { fontWeight: "700", fontSize: 13, color: "#333" },
  back: {
    paddingTop: 55,
    paddingBottom: 8,
    alignSelf: "flex-start",
  },
  backIcon: { fontSize: 38, color: "#181725", lineHeight: 38 },
  mapWrap: {
    alignSelf: "center",
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  mapImg: { width: 180, height: 180 },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#181725",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  label: { fontSize: 14, color: "#7C7C7C", fontWeight: "600", marginBottom: 8 },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  dropVal: { fontSize: 16, color: "#181725", fontWeight: "600" },
  arrow: { color: "#7C7C7C" },
  list: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    marginTop: 4,
    backgroundColor: "#fff",
    elevation: 5,
    zIndex: 100,
  },
  listItem: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  listText: { fontSize: 15, color: "#181725" },
  submitBtn: {
    marginTop: 36,
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 4,
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});