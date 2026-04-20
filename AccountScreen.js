import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUser, clearAll } from "./storage";
import { useCart } from "./CartContext";

export default function AccountScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const { resetCart } = useCart();

  useEffect(() => {
    const load = async () => {
      const u = await getUser();
      setUser(u);
    };
    load();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc muốn đăng xuất?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đăng xuất",
          style: "destructive",
          onPress: async () => {
            try {
              await clearAll();  // xóa toàn bộ AsyncStorage
              resetCart();       // xóa state cart + favs trong memory
              navigation.replace("Login");
            } catch (e) {
              console.error("logout error:", e);
              navigation.replace("Login");
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleAbsolute}>
          <Text style={styles.title}>Account</Text>
        </View>
        <View style={styles.studentBadge}>
          <Text style={styles.studentText}>Trần Minh Hiếu</Text>
        </View>
      </View>

      {/* User info */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#53B175" />
        </View>
        <Text style={styles.userName}>{user?.name || "Người dùng"}</Text>
        <Text style={styles.userEmail}>{user?.email || ""}</Text>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Orders")}
        >
          <Ionicons name="receipt-outline" size={22} color="#181725" />
          <Text style={styles.menuText}>Đơn hàng của tôi</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#B3B3B3"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="heart-outline" size={22} color="#181725" />
          <Text style={styles.menuText}>Yêu thích</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#B3B3B3"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={22} color="#181725" />
          <Text style={styles.menuText}>Cài đặt</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#B3B3B3"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Logout */}
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#F4613A" />
          <Text style={[styles.menuText, { color: "#F4613A" }]}>
            Đăng xuất
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#B3B3B3"
            style={{ marginLeft: "auto" }}
          />
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
  userCard: {
    alignItems: "center",
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderColor: "#F2F3F2",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5EE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#181725",
    marginBottom: 4,
  },
  userEmail: { fontSize: 14, color: "#7C7C7C" },
  menu: { paddingHorizontal: 20, marginTop: 16 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    gap: 14,
  },
  menuText: { fontSize: 16, color: "#181725", fontWeight: "500" },
  divider: { height: 1, backgroundColor: "#F2F3F2" },
});