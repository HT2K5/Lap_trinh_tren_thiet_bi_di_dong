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
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// 📌 Thay tên file ảnh đúng với ảnh bạn có trong assets
const BEVERAGES = [
  {
    id: 1,
    name: "Diet Coke",
    sub: "355ml, Price",
    price: "$1.99",
    image: require("./assets/diet_coke.png"),
  },
  {
    id: 2,
    name: "Sprite Can",
    sub: "325ml, Price",
    price: "$1.50",
    image: require("./assets/sprite.png"),
  },
  {
    id: 3,
    name: "Apple & Grape\nJuice",
    sub: "2l, Price",
    price: "$15.99",
    image: require("./assets/apple_juice.png"),
  },
  {
    id: 4,
    name: "Orenge Juice",
    sub: "2l, Price",
    price: "$15.99",
    image: require("./assets/orange_juice.png"),
  },
  {
    id: 5,
    name: "Coca Cola Can",
    sub: "325ml, Price",
    price: "$4.99",
    image: require("./assets/coca_cola.png"),
  },
  {
    id: 6,
    name: "Pepsi Can",
    sub: "330ml, Price",
    price: "$4.99",
    image: require("./assets/pepsi.png"),
  },
];

export default function BeveragesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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
          <View key={item.id} style={styles.card}>
            <View style={styles.cardImg}>
              {/* 📌 ảnh sản phẩm thật */}
              <Image
                source={item.image}
                style={{ width: "85%", height: "85%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardSub}>{item.sub}</Text>
            <View style={styles.cardBottom}>
              <Text style={styles.cardPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
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
  },
  titleAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#181725",
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  studentBadge: {
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 10, color: "#333" },
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
    height: 130,
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