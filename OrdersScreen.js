import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getOrders } from "./storage";
import { useFocusEffect } from "@react-navigation/native";

export default function OrdersScreen({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (e) {
      console.error("loadOrders error:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Load lại khi màn hình được focus
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      loadOrders();
    }, [])
  );

  const onRefresh = () => {
    setRefreshing(true);
    loadOrders();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Đơn hàng của tôi</Text>
        </View>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
      </View>

      {/* Loading */}
      {loading ? (
        <View style={styles.loadingWrap}>
          <ActivityIndicator size="large" color="#53B175" />
          <Text style={styles.loadingText}>Đang tải đơn hàng...</Text>
        </View>
      ) : orders.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons name="receipt-outline" size={80} color="#E2E2E2" />
          <Text style={styles.emptyText}>Chưa có đơn hàng nào</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#53B175"]}
            />
          }
        >
          {orders.map((order, index) => (
            <View key={order.id} style={styles.orderCard}>
              {/* Order header */}
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderId}>
                    Đơn #{order.id.slice(-6)}
                  </Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              {/* Items */}
              {order.items.map(item => (
                <View key={item.id} style={styles.orderItem}>
                  {item.image && (
                    <Image
                      source={item.image}
                      style={styles.itemImg}
                      resizeMode="contain"
                    />
                  )}
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemSub}>
                      {item.unit} × {item.qty}
                    </Text>
                  </View>
                  <Text style={styles.itemPrice}>
                    ${((parseFloat(item.price) || 0) * item.qty).toFixed(2)}
                  </Text>
                </View>
              ))}

              {/* Total */}
              <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>Tổng cộng</Text>
                <Text style={styles.totalPrice}>
                  ${(parseFloat(order.total) || 0).toFixed(2)}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
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
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  loadingWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  loadingText: { fontSize: 14, color: "#7C7C7C" },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  emptyText: { fontSize: 16, color: "#7C7C7C" },
  scroll: { flex: 1, padding: 16 },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#F2F3F2",
  },
  orderId: { fontSize: 16, fontWeight: "800", color: "#181725" },
  orderDate: { fontSize: 13, color: "#7C7C7C", marginTop: 2 },
  statusBadge: {
    backgroundColor: "#E8F5EE",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: { fontSize: 12, color: "#53B175", fontWeight: "700" },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  itemImg: { width: 50, height: 50 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 14, fontWeight: "700", color: "#181725" },
  itemSub: { fontSize: 12, color: "#7C7C7C", marginTop: 2 },
  itemPrice: { fontSize: 14, fontWeight: "800", color: "#181725" },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: "#F2F3F2",
  },
  totalLabel: { fontSize: 16, fontWeight: "700", color: "#181725" },
  totalPrice: { fontSize: 20, fontWeight: "800", color: "#53B175" },
});