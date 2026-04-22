import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import data from './data';

const { width } = Dimensions.get('window');
const CARD_W = (width - 48) / 2;

function CoffeeCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.cardImg} />
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingStar}>★</Text>
        <Text style={styles.ratingNum}> {item.rating}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.cardTag}>{item.tag}</Text>
        <View style={styles.cardRow}>
          <Text style={styles.cardPrice}>$ {item.price.toFixed(2)}</Text>
          <View style={styles.addBtn}>
            <Ionicons name="add" size={18} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('All Coffee');
  const [search, setSearch] = useState('');

  const filtered = data.coffees.filter(c => {
    const matchCat    = activeCategory === 'All Coffee' || c.category === activeCategory;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1F2E" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locLabel}>Location</Text>
          <View style={styles.locRow}>
            <Text style={styles.locText}>Bilzen, Tanjungbalai</Text>
            <Ionicons name="chevron-down" size={14} color="#FFFFFF" style={{ marginLeft: 4 }} />
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#ADADAD" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search coffee"
            placeholderTextColor="#ADADAD"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>

        {/* Promo Banner — chi anh, khong chu */}
        <View style={styles.banner}>
          <Image source={data.promo.image} style={styles.bannerImg} />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catList}
        >
          {data.categories.map(cat => (
            <TouchableOpacity
              key={cat}
              style={[styles.catBtn, activeCategory === cat && styles.catBtnActive]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.catText, activeCategory === cat && styles.catTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Grid */}
        <View style={styles.grid}>
          {filtered.map(item => (
            <CoffeeCard
              key={item.id}
              item={item}
              onPress={coffee => navigation.navigate('Detail', { coffee })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F2EC' },

  header: {
    backgroundColor: '#1F1F2E',
    paddingTop: 52,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locLabel: { fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 3 },
  locRow:   { flexDirection: 'row', alignItems: 'center' },
  locText:  { fontSize: 14, fontWeight: '700', color: '#FFFFFF' },

  searchWrap: {
    backgroundColor: '#1F1F2E',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 12,
    gap: 12,
  },
  searchBox: {
    flex: 1, backgroundColor: '#313140',
    borderRadius: 14,
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 14, paddingVertical: 11, gap: 8,
  },
  searchInput: { flex: 1, color: '#FFFFFF', fontSize: 14 },
  filterBtn: {
    backgroundColor: '#C67C4E',
    width: 46, height: 46, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center',
  },

  banner: {
    marginHorizontal: 16, marginTop: 16, marginBottom: 20,
    height: 156, borderRadius: 20, overflow: 'hidden',
  },
  bannerImg: { width: '100%', height: '100%', resizeMode: 'cover' },

  catList: { paddingHorizontal: 16, gap: 10, paddingBottom: 4 },
  catBtn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18, paddingVertical: 8,
    borderRadius: 20, elevation: 2,
  },
  catBtnActive: { backgroundColor: '#C67C4E' },
  catText:       { fontSize: 13, fontWeight: '600', color: '#8D8D8D' },
  catTextActive: { color: '#FFFFFF' },

  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 16, gap: 16, marginTop: 16,
  },
  card: {
    width: CARD_W, backgroundColor: '#FFFFFF',
    borderRadius: 18, overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.09, shadowRadius: 10,
  },
  cardImg: { width: '100%', height: 128, resizeMode: 'cover' },
  ratingBadge: {
    position: 'absolute', top: 8, right: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3,
    flexDirection: 'row', alignItems: 'center',
  },
  ratingStar: { color: '#FBBE21', fontSize: 11 },
  ratingNum:  { color: '#FFFFFF', fontSize: 11, fontWeight: '600' },
  cardBody: { padding: 12 },
  cardName: { fontSize: 14, fontWeight: '700', color: '#2F2D2C', marginBottom: 2 },
  cardTag:  { fontSize: 12, color: '#ADADAD', marginBottom: 10 },
  cardRow:  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 15, fontWeight: '800', color: '#2F2D2C' },
  addBtn: {
    width: 30, height: 30, backgroundColor: '#C67C4E',
    borderRadius: 9, justifyContent: 'center', alignItems: 'center',
  },
});