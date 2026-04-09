import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function FoodDetailScreen({ route }) {
  const { item } = route.params || {};
  if (!item) return <View style={styles.container}><Text>Không có dữ liệu</Text></View>;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.by}>{item.by}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.desc}>Đây là món ăn đặc sản nổi tiếng, được chế biến từ những nguyên liệu tươi ngon nhất. Hương vị độc đáo và hấp dẫn.</Text>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={styles.orderText}>Đặt món ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 280 },
  content: { padding: 20 },
  name: { fontSize: 22, fontWeight: "700", color: "#222", marginBottom: 4 },
  by: { fontSize: 14, color: "#888", marginBottom: 8 },
  price: { fontSize: 18, fontWeight: "700", color: "#F5A623", marginBottom: 16 },
  desc: { fontSize: 14, color: "#555", lineHeight: 22, marginBottom: 24 },
  orderBtn: { backgroundColor: "#F5A623", borderRadius: 10, paddingVertical: 14, alignItems: "center" },
  orderText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});