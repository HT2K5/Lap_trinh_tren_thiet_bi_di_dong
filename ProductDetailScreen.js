import React, { useState } from "react";
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

export default function ProductDetailScreen({ navigation, route }) {
  const item = route?.params?.item || {
    name: "Naturel Red Apple",
    sub: "1kg, Price",
    price: "$4.99",
    image: require("./assets/apple.png"), // 📌 thay tên file ảnh
  };
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={26} color="#181725" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Product image - 📌 ảnh sản phẩm thật */}
        <View style={styles.imgWrap}>
          <Image
            source={item.image}
            style={styles.productImg}
            resizeMode="contain"
          />
        </View>

        {/* Dots indicator */}
        <View style={styles.dotsRow}>
          {[0, 1, 2].map(i => (
            <View key={i} style={[styles.dot, i === 0 && styles.dotActive]} />
          ))}
        </View>

        <View style={styles.content}>

          {/* Name + heart */}
          <View style={styles.nameRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productSub}>{item.sub}</Text>
            </View>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={28}
                color={liked ? "#F4613A" : "#181725"}
              />
            </TouchableOpacity>
          </View>

          {/* Qty + price */}
          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => qty > 1 && setQty(qty - 1)}
            >
              <Ionicons name="remove" size={20} color="#53B175" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQty(qty + 1)}
            >
              <Ionicons name="add" size={20} color="#53B175" />
            </TouchableOpacity>
            <Text style={styles.price}>{item.price}</Text>
          </View>

          {/* Product Detail */}
          <TouchableOpacity style={styles.accordion}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={20} color="#181725" />
          </TouchableOpacity>
          <Text style={styles.detailText}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss.
            Apples May Be Good For Your Heart. As Part Of A Healthful
            And Varied Diet.
          </Text>

          {/* Nutritions */}
          <TouchableOpacity style={styles.accordion}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.accordionRight}>
              <Text style={styles.nutritionBadge}>100gr</Text>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </TouchableOpacity>

          {/* Review */}
          <TouchableOpacity style={styles.accordion}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.accordionRight}>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Ionicons key={i} name="star" size={14} color="#F3A32E" />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Add to basket */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
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
    paddingVertical: 12,
  },
  studentBadge: {
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  imgWrap: {
    height: 280,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 18,
  },
  productImg: {
    width: "80%",
    height: "80%",
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 16,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E2E2",
  },
  dotActive: {
    backgroundColor: "#53B175",
    width: 20,
  },
  content: { paddingHorizontal: 20 },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  productName: { fontSize: 24, fontWeight: "800", color: "#181725" },
  productSub: { fontSize: 14, color: "#7C7C7C", marginTop: 4 },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { fontSize: 20, fontWeight: "700", color: "#181725" },
  price: {
    fontSize: 24,
    fontWeight: "800",
    color: "#181725",
    marginLeft: "auto",
  },
  accordion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#E2E2E2",
  },
  accordionTitle: { fontSize: 16, fontWeight: "700", color: "#181725" },
  accordionRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  nutritionBadge: {
    backgroundColor: "#E8F5EE",
    color: "#53B175",
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  starsRow: { flexDirection: "row", gap: 2 },
  detailText: {
    fontSize: 13,
    color: "#7C7C7C",
    lineHeight: 20,
    marginBottom: 8,
  },
  footer: { padding: 20 },
  addBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  addText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});