import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const PRICE_OFFSET = { S: -0.5, M: 0, L: 0.5 };

export default function DetailScreen({ route, navigation }) {
  const { coffee } = route.params;
  const [size, setSize]         = useState('M');
  const [liked, setLiked]       = useState(false);
  const [expanded, setExpanded] = useState(false);

  const price = (coffee.price + PRICE_OFFSET[size]).toFixed(2);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F2EC" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#2F2D2C" />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Detail</Text>
        <TouchableOpacity style={styles.iconBtn} onPress={() => setLiked(v => !v)}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={20}
            color={liked ? '#D94F4F' : '#2F2D2C'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* Hero image */}
        <Image source={coffee.image} style={styles.hero} />

        {/* Info card */}
        <View style={styles.card}>

          {/* Name + icons */}
          <View style={styles.nameRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{coffee.name}</Text>
              <Text style={styles.type}>{coffee.type}</Text>
            </View>
            <View style={styles.iconGroup}>
              <View style={styles.icoBox}><Text style={styles.icoEmoji}>☕</Text></View>
              <View style={styles.icoBox}><Text style={styles.icoEmoji}>🫘</Text></View>
              <View style={styles.icoBox}><Text style={styles.icoEmoji}>🥛</Text></View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Rating */}
          <View style={styles.ratingRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.ratingBig}>{coffee.rating}</Text>
            <Text style={styles.ratingCnt}>({coffee.reviews})</Text>
          </View>

          <View style={styles.divider} />

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.desc} numberOfLines={expanded ? undefined : 3}>
            {coffee.description}
          </Text>
          {!expanded && (
            <TouchableOpacity onPress={() => setExpanded(true)}>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          )}

          <View style={styles.divider} />

          {/* Size */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {coffee.sizes.map(s => (
              <TouchableOpacity
                key={s}
                style={[styles.sizeBtn, size === s && styles.sizeBtnActive]}
                onPress={() => setSize(s)}
              >
                <Text style={[styles.sizeText, size === s && styles.sizeTextActive]}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceAmt}>$ {price}</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} activeOpacity={0.85}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F2EC' },

  topBar: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 52, paddingBottom: 14, paddingHorizontal: 20,
  },
  topTitle: { fontSize: 17, fontWeight: '700', color: '#2F2D2C' },
  iconBtn: {
    width: 36, height: 36, borderRadius: 11,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', alignItems: 'center',
    elevation: 3,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, shadowRadius: 6,
  },

  hero: {
    width: width - 32, height: 210,
    borderRadius: 20,
    marginHorizontal: 16, marginBottom: -24, zIndex: 1,
  },

  card: {
    marginHorizontal: 16, backgroundColor: '#FFFFFF',
    borderRadius: 24, padding: 20, paddingTop: 38,
    elevation: 4,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07, shadowRadius: 14,
  },
  nameRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 14 },
  name: { fontSize: 22, fontWeight: '800', color: '#2F2D2C', marginBottom: 3 },
  type: { fontSize: 13, color: '#ADADAD' },
  iconGroup: { flexDirection: 'row', gap: 8 },
  icoBox: {
    width: 34, height: 34, borderRadius: 10,
    backgroundColor: '#FFF5EE',
    justifyContent: 'center', alignItems: 'center',
  },
  icoEmoji: { fontSize: 15 },

  divider: { height: 1, backgroundColor: '#F0EBE3', marginVertical: 12 },

  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  star:      { color: '#FBBE21', fontSize: 22 },
  ratingBig: { fontSize: 17, fontWeight: '800', color: '#2F2D2C' },
  ratingCnt: { fontSize: 13, color: '#ADADAD' },

  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#2F2D2C', marginBottom: 8 },
  desc:         { fontSize: 13, color: '#808080', lineHeight: 21 },
  readMore:     { color: '#C67C4E', fontWeight: '700', fontSize: 13, marginTop: 4 },

  sizeRow: { flexDirection: 'row', gap: 12 },
  sizeBtn: {
    flex: 1, paddingVertical: 12, borderRadius: 12,
    borderWidth: 1.5, borderColor: '#DEDEDE', alignItems: 'center',
  },
  sizeBtnActive:  { borderColor: '#C67C4E', backgroundColor: '#FFF5EE' },
  sizeText:       { fontSize: 15, fontWeight: '600', color: '#ADADAD' },
  sizeTextActive: { color: '#C67C4E' },

  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 20, paddingVertical: 16, paddingBottom: 34,
    borderTopLeftRadius: 22, borderTopRightRadius: 22,
    elevation: 10,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.07, shadowRadius: 12,
    gap: 20,
  },
  priceLabel: { fontSize: 12, color: '#ADADAD', marginBottom: 3 },
  priceAmt:   { fontSize: 22, fontWeight: '900', color: '#C67C4E' },
  buyBtn: {
    flex: 1, backgroundColor: '#C67C4E',
    borderRadius: 16, paddingVertical: 16, alignItems: 'center',
    elevation: 6,
    shadowColor: '#C67C4E', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.38, shadowRadius: 12,
  },
  buyText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});