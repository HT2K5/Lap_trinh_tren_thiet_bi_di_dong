
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

const CATEGORIES = [
  {
    name: "Frash Fruits\n& Vegetable",
    image: require("./assets/fruits.png"),
    bg: "#e5f4ec",
    border: "#80f6b7",
  },
  {
    name: "Cooking Oil\n& Ghee",
    image: require("./assets/oil.png"),
    bg: "#FFF6E8",
    border: "#ecd97a",
  },
  {
    name: "Meat & Fish",
    image: require("./assets/meat.png"),
    bg: "#f8dcdc",
    border: "#fbb1b1",
  },
  {
    name: "Bakery & Snacks",
    image: require("./assets/bakery.png"),
    bg: "#edd5eb",
    border: "#d9bbd7",
  },
  {
    name: "Dairy & Eggs",
    image: require("./assets/dairy.png"),
    bg: "#FDE598",
    border: "#f9cd3c",
  },
  {
    name: "Beverages",
    image: require("./assets/beverages.png"),
    bg: "#B7DFF5",
    border: "#9bdcff",
  },
  {
    name: "",
    bg: "#ccc2fb",
    border: "#6749ed",
  },
  {
    name: "",
    bg: "#edd5eb",
    border: "#d9bbd7",
  },
];

export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
<View style={styles.header}>
  <Text style={styles.title}>Find Products</Text>
  <View style={styles.studentBadge}>
    <Text style={styles.studentText}>Trần Minh Hiếu</Text>
  </View>
</View>

      {/* Search */}
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
        />
      </View>

      {/* Grid 2 cột */}
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORIES.map((c, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.categoryCard, { backgroundColor: c.bg,
              borderColor: c.border,
              borderWidth: 1.5,
             }]}
            onPress={() =>
              c.name.includes("Beverages") && navigation.navigate("Beverages")
            }
          >
            {/* Ảnh góc trên phải */}
            <Image
              source={c.image}
              style={styles.categoryImg}
              resizeMode="contain"
            />
            {/* Tên góc dưới trái */}
            <Text style={styles.categoryName}>{c.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
title: {
  fontSize: 24,
  fontWeight: "800",
  color: "#181725",
  textAlign: "center",      
},
studentBadge: {
  position: "absolute",     
  right: 20,
  backgroundColor: "rgba(255,235,0,0.9)",
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderRadius: 14,
},
studentText: { fontWeight: "700", fontSize: 12, color: "#333" },

grid: {
  flexDirection: "row",
  flexWrap: "wrap",
  paddingHorizontal: 12,
  gap: 12,
  paddingBottom: 20,
},
categoryCard: {
  width: "47%",
  height: 190,               
  borderRadius: 18,
  justifyContent: "flex-end",
  alignItems: "center",
  padding: 16,
  overflow: "hidden",
},
categoryImg: {
  width: 110,                
  height: 130,


},
categoryName: {
  fontSize: 16,
  fontWeight: "700",
  color: "#181725",
  lineHeight: 22,
},
searchRow: {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 20,
  marginBottom: 30,
  marginTop: 20,
  backgroundColor: "#F2F3F2",
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 12,
},
searchInput: { flex: 1, fontSize: 14, color: "#181725" },
});