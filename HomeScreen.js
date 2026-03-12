import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const CATEGORIES = [
  { id: "1", name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200" },
  { id: "2", name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" },
  { id: "3", name: "Steak", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200" },
];

const POPULAR_ITEMS = [
  { id: "1", name: "Food 1", by: "By Viet Nam", price: "1$", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" },
  { id: "2", name: "Food 2", by: "By Japan", price: "3$", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
];

const DISCOUNT_ITEMS = [
  { id: "1", name: "Special 1", discount: "10% OFF", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
  { id: "2", name: "Special 2", discount: "15% OFF", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("1");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={styles.locationBox}>
          <Text style={styles.locationPin}>📍</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for meals or area"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>🔽 Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalContent}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.categoryItem}
            onPress={() => setActiveCategory(cat.id)}
          >
            <Image
              source={{ uri: cat.image }}
              style={[
                styles.categoryImage,
                activeCategory === cat.id && styles.categoryImageActive,
              ]}
            />
            <Text style={styles.categoryName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalContent}
      >
        {POPULAR_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularBy}>{item.by}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Discount Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalContent}
      >
        {DISCOUNT_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.discountCard}>
            <View>
              <Image source={{ uri: item.image }} style={styles.discountImage} />
              {item.discount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
              )}
            </View>
            <Text style={styles.discountName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 16,
    gap: 8,
  },
  locationBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  locationPin: {
    fontSize: 22,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  searchIcon: {
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: 13,
    color: "#F5A623",
    fontWeight: "500",
  },
  viewAll: {
    fontSize: 13,
    color: "#F5A623",
    fontWeight: "500",
  },
  horizontalScroll: {
    marginBottom: 36,
    marginHorizontal: -16,
  },
  horizontalContent: {
    paddingHorizontal: 16,
    gap: 12,
  },

  // Categories
  categoryItem: {
    alignItems: "center",
  },
  categoryImage: {
    width: 150,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryImageActive: {
    borderWidth: 2.5,
    borderColor: "#F5A623",
  },
  categoryName: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },

  // Popular Items
  popularCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    width: 320,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  popularImage: {
    width: 160,
    height: 160,
  },
  popularInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  popularName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  popularBy: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
  },

  // Discount Items
  discountCard: {
    width: 200,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  discountImageWrapper: {},
  discountImage: {
    width: "100%",
    height: 280,
  },
  discountBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#e53935",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  discountInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  discountName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
  },
});