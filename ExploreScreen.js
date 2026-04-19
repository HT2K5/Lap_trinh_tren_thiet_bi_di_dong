import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "./data";
import { useCart } from "./CartContext";

const CATEGORIES = [
  {
    name: "Frash Fruits\n& Vegetable",
    image: require("./assets/fruits.png"),
    bg: "#E8F5EE",
    border: "#B7DFC8",
  },
  {
    name: "Cooking Oil\n& Ghee",
    image: require("./assets/oil.png"),
    bg: "#FFF6E8",
    border: "#FFD9A0",
  },
  {
    name: "Meat & Fish",
    image: require("./assets/meat.png"),
    bg: "#FFE8E8",
    border: "#FFBCBC",
  },
  {
    name: "Bakery &\nSnacks",
    image: require("./assets/bakery.png"),
    bg: "#F0E8FF",
    border: "#C4C4F0",
  },
  {
    name: "Dairy & Eggs",
    image: require("./assets/dairy.png"),
    bg: "#FFF6D0",
    border: "#FFD9A0",
  },
  {
    name: "Beverages",
    image: require("./assets/beverages.png"),
    bg: "#E8F0FF",
    border: "#B0C4FF",
  },
];

export default function ExploreScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { addToCart } = useCart();

  const searchResults = products.filter(p => {
    const matchQuery =
      query.length === 0 ||
      p.name.toLowerCase().includes(query.toLowerCase());
    const matchCat =
      selectedCats.length === 0 || selectedCats.includes(p.category);
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    return matchQuery && matchCat && matchBrand;
  });

  const showResults =
    query.length > 0 ||
    selectedCats.length > 0 ||
    selectedBrands.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Find Products</Text>
        </View>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
      </View>

      {/* Search + Filter */}
      <View style={styles.searchWrap}>
        <View style={styles.searchRow}>
          <Ionicons
            name="search"
            size={20}
            color="#7C7C7C"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={20} color="#7C7C7C" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() =>
            navigation.navigate("Filter", {
              selectedCats,
              selectedBrands,
              onApply: (cats, brands) => {
                setSelectedCats(cats);
                setSelectedBrands(brands);
              },
            })
          }
        >
          <Ionicons name="options-outline" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Khi tìm kiếm */}
      {showResults ? (
        <ScrollView
          contentContainerStyle={styles.productGrid}
          showsVerticalScrollIndicator={false}
        >
          {searchResults.length === 0 ? (
            <View style={styles.emptyWrap}>
              <Ionicons name="search-outline" size={60} color="#E2E2E2" />
              <Text style={styles.noResult}>
                Không tìm thấy "{query}"
              </Text>
            </View>
          ) : (
            searchResults.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.productCard}
                onPress={() => navigation.navigate("ProductDetail", { item })}
              >
                <View style={styles.productImg}>
                  <Image
                    source={item.image}
                    style={{ width: "85%", height: "85%" }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productSub}>{item.unit}, Price</Text>
                <View style={styles.productBottom}>
                  <Text style={styles.productPrice}>
                    ${(parseFloat(item.price) || 0).toFixed(2)}
                  </Text>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() => addToCart(item)}
                  >
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      ) : (
        /* Danh mục */
        <ScrollView
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        >
          {CATEGORIES.map((c, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.categoryCard,
                { backgroundColor: c.bg, borderColor: c.border },
              ]}
              onPress={() =>
                c.name.includes("Beverages") &&
                navigation.navigate("Beverages")
              }
            >
              <Image
                source={c.image}
                style={styles.categoryImg}
                resizeMode="contain"
              />
              <Text style={styles.categoryName}>{c.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: "relative",
  },
  titleAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "800", color: "#181725" },
  studentBadge: {
    marginLeft: "auto",
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  searchRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: { flex: 1, fontSize: 14, color: "#181725" },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
  categoryCard: {
    width: "47%",
    height: 220,
    borderRadius: 18,
    borderWidth: 1.5,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    overflow: "hidden",
  },
  categoryImg: {
    width: 130,
    height: 130,
    marginTop: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    lineHeight: 22,
    alignSelf: "flex-start",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
  productCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 14,
  },
  productImg: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  productSub: { fontSize: 12, color: "#7C7C7C", marginBottom: 10 },
  productBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: { fontSize: 16, fontWeight: "800", color: "#181725" },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyWrap: {
    width: "100%",
    alignItems: "center",
    marginTop: 80,
    gap: 12,
  },
  noResult: {
    textAlign: "center",
    color: "#7C7C7C",
    fontSize: 16,
  },
});