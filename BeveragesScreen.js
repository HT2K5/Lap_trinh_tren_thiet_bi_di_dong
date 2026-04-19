import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView as SAV } from "react-native-safe-area-context";
import { useCart } from "./CartContext";

const BEVERAGES = [
  {
    id: 13,
    name: "Diet Coke",
    unit: "355ml",
    price: 1.99,
    category: "Beverages",
    brand: "Coca Cola",
    image: require("./assets/diet_coke.png"),
  },
  {
    id: 14,
    name: "Sprite Can",
    unit: "325ml",
    price: 1.50,
    category: "Beverages",
    brand: "Individual Collection",
    image: require("./assets/sprite.png"),
  },
  {
    id: 15,
    name: "Apple & Grape\nJuice",
    unit: "2l",
    price: 15.99,
    category: "Beverages",
    brand: "Individual Collection",
    image: require("./assets/apple_juice.png"),
  },
  {
    id: 16,
    name: "Orange Juice",
    unit: "2l",
    price: 15.99,
    category: "Beverages",
    brand: "Individual Collection",
    image: require("./assets/orange_juice.png"),
  },
  {
    id: 17,
    name: "Coca Cola Can",
    unit: "325ml",
    price: 4.99,
    category: "Beverages",
    brand: "Coca Cola",
    image: require("./assets/coca_cola.png"),
  },
  {
    id: 18,
    name: "Pepsi Can",
    unit: "330ml",
    price: 4.99,
    category: "Beverages",
    brand: "Ifad",
    image: require("./assets/pepsi.png"),
  },
];

export default function BeveragesScreen({ navigation }) {
  const { addToCart } = useCart();

  return (
    <SAV style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Beverages</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.studentBadge}>
            <Text style={styles.studentText}>Trần Minh Hiếu</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Ionicons name="options-outline" size={26} color="#181725" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Grid 2 cột */}
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {BEVERAGES.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate("ProductDetail", { item })}
          >
            <View style={styles.cardImg}>
              <Image
                source={item.image}
                style={{ width: "90%", height: "90%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardSub}>{item.unit}, Price</Text>
            <View style={styles.cardBottom}>
              <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => addToCart(item)}
              >
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SAV>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
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
  headerRight: { flexDirection: "row", alignItems: "center" },
  studentBadge: {
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    gap: 12,
    paddingBottom: 30,
  },
  card: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 14,
  },
  cardImg: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  cardSub: { fontSize: 12, color: "#7C7C7C", marginBottom: 10 },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: { fontSize: 16, fontWeight: "800", color: "#181725" },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
});