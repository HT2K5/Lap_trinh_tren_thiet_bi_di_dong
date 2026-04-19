import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "./CartContext";

export default function FavouriteScreen() {
  const { favs, removeFromFavs, addToCart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Favourites</Text>
        </View>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
      </View>

      {/* Empty */}
      {favs.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons name="heart-outline" size={80} color="#E2E2E2" />
          <Text style={styles.emptyText}>Chưa có sản phẩm yêu thích</Text>
        </View>
      ) : (
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {favs.map((item, index) => (
            <View key={item.id}>
              <View style={styles.favItem}>
                <Image
                  source={item.image}
                  style={styles.itemImg}
                  resizeMode="contain"
                />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemSub}>{item.unit}, Price</Text>
                  <Text style={styles.itemPrice}>
                    ${(parseFloat(item.price) || 0).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => removeFromFavs(item.id)}>
                  <Ionicons name="chevron-forward" size={24} color="#B3B3B3" />
                </TouchableOpacity>
              </View>
              {index < favs.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </ScrollView>
      )}

      {/* Add all to cart */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.addAllBtn, favs.length === 0 && { opacity: 0.5 }]}
          disabled={favs.length === 0}
          onPress={() => favs.forEach(item => addToCart(item))}
        >
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
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
  studentBadge: {
    marginLeft: "auto",
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  scroll: { flex: 1 },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  emptyText: { fontSize: 16, color: "#7C7C7C" },
  favItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
  },
  itemImg: { width: 70, height: 70 },
  itemInfo: { flex: 1 },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  itemSub: { fontSize: 13, color: "#7C7C7C", marginBottom: 6 },
  itemPrice: { fontSize: 16, fontWeight: "800", color: "#181725" },
  divider: {
    height: 1,
    backgroundColor: "#F2F3F2",
    marginHorizontal: 20,
  },
  footer: { padding: 20 },
  addAllBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  addAllText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});