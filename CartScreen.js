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

export default function CartScreen() {
  const { cart, updateQty, removeFromCart, total } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>My Cart</Text>
        </View>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
      </View>

      {/* Empty */}
      {cart.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons name="cart-outline" size={80} color="#E2E2E2" />
          <Text style={styles.emptyText}>Giỏ hàng trống</Text>
        </View>
      ) : (
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {cart.map((item, index) => (
            <View key={item.id}>
              <View style={styles.cartItem}>
                <Image
                  source={item.image}
                  style={styles.itemImg}
                  resizeMode="contain"
                />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemSub}>{item.unit}, Price</Text>
                  <View style={styles.qtyRow}>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => updateQty(item.id, -1)}
                    >
                      <Ionicons name="remove" size={16} color="#181725" />
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => updateQty(item.id, 1)}
                    >
                      <Ionicons name="add" size={16} color="#181725" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.itemRight}>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Ionicons name="close" size={22} color="#B3B3B3" />
                  </TouchableOpacity>
                  <Text style={styles.itemPrice}>
                    ${((parseFloat(item.price) || 0) * item.qty).toFixed(2)}
                  </Text>
                </View>
              </View>
              {index < cart.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </ScrollView>
      )}

      {/* Checkout */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.checkoutBtn, cart.length === 0 && { opacity: 0.5 }]}
          disabled={cart.length === 0}
        >
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.checkoutBadge}>
            <Text style={styles.checkoutPrice}>
              ${(parseFloat(total) || 0).toFixed(2)}
            </Text>
          </View>
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
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
  },
  itemImg: { width: 80, height: 80 },
  itemInfo: { flex: 1 },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  itemSub: { fontSize: 13, color: "#7C7C7C", marginBottom: 12 },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { fontSize: 16, fontWeight: "700", color: "#181725" },
  itemRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 80,
  },
  itemPrice: { fontSize: 16, fontWeight: "800", color: "#181725" },
  divider: {
    height: 1,
    backgroundColor: "#F2F3F2",
    marginHorizontal: 20,
  },
  footer: { padding: 20 },
  checkoutBtn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  checkoutBadge: {
    backgroundColor: "rgba(0,0,0,0.15)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  checkoutPrice: { color: "#fff", fontSize: 16, fontWeight: "700" },
});