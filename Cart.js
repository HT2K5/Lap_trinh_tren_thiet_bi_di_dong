import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBar } from './Bottomtabbar';
import { useState } from 'react';

const initialItems = [
  {
    id: '1', brand: "Lauren's", name: 'Orange Juice', price: 74.5, qty: 2,
    image: require('./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png'),
  },
  {
    id: '2', brand: "Baskin's", name: 'Skimmed Milk', price: 64.5, qty: 2,
    image: require('./assets/milk.png'),
  },
  {
    id: '3', brand: "Marley's", name: 'Aloe Vera Lotion', price: 624.5, qty: 2,
    image: require('./assets/lotion.png'),
  },
];

export function Cart() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Your Cart 👍</Text>

        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.imgWrapper}>
                <Image source={item.image} style={styles.img} resizeMode="contain" />
              </View>
              <View style={styles.info}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹ {(item.price * item.qty).toLocaleString()}</Text>
              </View>
              <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQty(item.id, -1)}>
                  <Text style={styles.qtyIcon}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{item.qty}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQty(item.id, +1)}>
                  <Text style={styles.qtyIcon}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹ {total.toLocaleString()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.checkoutText}>Proceed to checkout</Text>
          </TouchableOpacity>
        </View>

      </View>

      <BottomTabBar activeTab="Cart" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E87A47',
    marginTop: 16,
  },
  backArrow: {
    fontSize: 28,
    color: '#E87A47',
    marginTop: -2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 16,
    marginBottom: 24,
  },
  list: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
  },
  imgWrapper: {
    width: 65,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 85,
  },
  info: {
    flex: 1,
  },
  brand: {
    fontSize: 12,
    color: '#888',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#111',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyIcon: {
    fontSize: 16,
    color: '#555',
    marginTop: -1,
  },
  qty: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    minWidth: 16,
    textAlign: 'center',
  },
  footer: {
    paddingBottom: 100,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E87A47',
  },
  checkoutBtn: {
    backgroundColor: '#E87A47',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});