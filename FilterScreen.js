import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories, brands } from "./data";

export default function FilterScreen({ navigation, route }) {
  const {
    selectedCats: initCats = [],
    selectedBrands: initBrands = [],
    onApply,
  } = route?.params || {};

  const [selectedCats, setSelectedCats] = useState(initCats);
  const [selectedBrands, setSelectedBrands] = useState(initBrands);

  const toggleCat = (c) =>
    setSelectedCats(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );

  const toggleBrand = (b) =>
    setSelectedBrands(prev =>
      prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
    );

  const handleApply = () => {
    if (onApply) onApply(selectedCats, selectedBrands);
    navigation.goBack();
  };

  const handleReset = () => {
    setSelectedCats([]);
    setSelectedBrands([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#181725" />
        </TouchableOpacity>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Filters</Text>
        </View>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        {categories.map((c, i) => (
          <TouchableOpacity
            key={i}
            style={styles.checkRow}
            onPress={() => toggleCat(c)}
          >
            <View style={[
              styles.checkbox,
              selectedCats.includes(c) && styles.checkboxOn,
            ]}>
              {selectedCats.includes(c) && (
                <Ionicons name="checkmark" size={14} color="#fff" />
              )}
            </View>
            <Text style={[
              styles.checkLabel,
              selectedCats.includes(c) && { color: "#53B175" },
            ]}>
              {c}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Brand */}
        <Text style={styles.sectionTitle}>Brand</Text>
        {brands.map((b, i) => (
          <TouchableOpacity
            key={i}
            style={styles.checkRow}
            onPress={() => toggleBrand(b)}
          >
            <View style={[
              styles.checkbox,
              selectedBrands.includes(b) && styles.checkboxOn,
            ]}>
              {selectedBrands.includes(b) && (
                <Ionicons name="checkmark" size={14} color="#fff" />
              )}
            </View>
            <Text style={[
              styles.checkLabel,
              selectedBrands.includes(b) && { color: "#53B175" },
            ]}>
              {b}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Apply button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#F2F3F2",
    position: "relative",
  },
  titleAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "800", color: "#181725" },
  resetText: { fontSize: 14, color: "#53B175", fontWeight: "700" },
  scroll: { flex: 1, paddingHorizontal: 20 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#181725",
    marginTop: 24,
    marginBottom: 16,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#F2F3F2",
    gap: 14,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxOn: {
    backgroundColor: "#53B175",
    borderColor: "#53B175",
  },
  checkLabel: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "500",
  },
  footer: { padding: 20 },
  applyBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  applyText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});