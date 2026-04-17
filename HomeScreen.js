
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const EXCLUSIVE = [
  {
    id: 1,
    name: "Organic Bananas",
    sub: "7pcs, Priceg",
    price: "$4.99",
    image: require("./assets/banana.png"),
  },
  {
    id: 2,
    name: "Red Apple",
    sub: "1kg, Priceg",
    price: "$4.99",
    image: require("./assets/apple.png"),
  },
  {
    id: 3,
    name: "",
    sub: "",
    price: "",

  },
];

const BEST_SELLING = [
  {
    id: 1,
    name: "Bell Pepper Red",
    sub: "1kg, Priceg",
    price: "$4.99",
    image: require("./assets/pepper.png"),
  },
  {
    id: 2,
    name: "Ginger",
    sub: "250g, Priceg",
    price: "$4.99",
    image: require("./assets/ginger.png"),
  },
  {
    id: 3,
    name: "",
    sub: "",
    price: "",

  },
];

const GROCERIES = [
  {
    id: 1,
    name: "Beef Bone",
    sub: "1kg, Priceg",
    price: "$4.99",
    image: require("./assets/beef.png"),
  },
  {
    id: 2,
    name: "Broiler Chicken",
    sub: "1kg, Priceg",
    price: "$4.99",
    image: require("./assets/chicken.png"),
  },
  {
    id: 3,
    name: "",
    sub: "",
    price: "",

  },
];

const CATEGORIES = [
  { name: "Pulses", image: require("./assets/Pulses.png"), bg: "#FFF6E8" },
  { name: "Rice", image: require("./assets/Rice.png"), bg: "#E8F5EE" },
];

function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardImg}>
        <Image
          source={item.image}
          style={{ width: "90%", height: "90%" }}
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
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
  <View style={styles.locationAbsolute}>
    {/* Carrot icon trước */}
    <Image
      source={require("./assets/carrot_orange.png")}
      style={styles.carrotIcon}
      resizeMode="contain"
    />
    {/* Dhaka bên dưới */}
    <View style={styles.locationRow}>
      <Ionicons name="location-sharp" size={16} color="#53B175" />
      <Text style={styles.locationText}>Dhaka, Banassre</Text>
    </View>
  </View>

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

        {/* Banner */}
        <TouchableOpacity style={styles.bannerWrap}>
          <Image
            source={require("./assets/banner.png")}
            style={styles.bannerImg}
            resizeMode="cover"
          />
        </TouchableOpacity>

        {/* Exclusive Offer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {EXCLUSIVE.map(item => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("ProductDetail", { item })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Best Selling */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {BEST_SELLING.map(item => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("ProductDetail", { item })}
              />
            ))}
          </ScrollView>
        </View>

        {/* Groceries */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Groceries</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Category chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16 }}
          >
            {CATEGORIES.map((c, i) => (
  <TouchableOpacity
    key={i}
    style={[styles.categoryChip, { backgroundColor: c.bg }]}
    onPress={() =>
      c.name.includes("Beverages") &&
      navigation.navigate("Beverages")
    }
  >
    <Image
      source={c.image}
      style={styles.categoryImg}
      resizeMode="contain"
    />
    <Text style={styles.categoryName}>{c.name}</Text>
  </TouchableOpacity>
))}
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {GROCERIES.map(item => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("ProductDetail", { item })}
              />
            ))}
          </ScrollView>
        </View>

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
    paddingTop: 16,
    paddingBottom: 8,
  },
  locationAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
  },
  carrotIcon: {
    width: 32,
    height: 32,
    marginTop: 4,
    alignSelf: "center",
  },
  studentBadge: {
    marginLeft: "auto",
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  studentText: { fontWeight: "700", fontSize: 12, color: "#333" },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 12,
    backgroundColor: "#F2F3F2",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: { flex: 1, fontSize: 14, color: "#181725" },
  bannerWrap: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 14,
    overflow: "hidden",
    height: 115,
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  section: { marginBottom: 24 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#181725" },
  seeAll: { fontSize: 14, color: "#53B175", fontWeight: "600" },
  card: {
    width: 174,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 14,
    marginLeft: 20,
    marginBottom: 4,
  },
  cardImg: {
    width: "100%",
    height: 100,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  cardSub: { fontSize: 13, color: "#7C7C7C", marginBottom: 10 },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: { fontSize: 18, fontWeight: "800", color: "#181725" },
  addBtn: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryChip: {
  borderRadius: 14,
  padding: 12,
  marginLeft: 20,
  alignItems: "center",
  width: 250,
  height: 100,
  justifyContent: "center",
},
categoryImg: {
  width: 100,
  height: 70,
  marginBottom: 8,
},
categoryName: {
  fontSize: 12,
  fontWeight: "600",
  color: "#181725",
  textAlign: "center",
},
});