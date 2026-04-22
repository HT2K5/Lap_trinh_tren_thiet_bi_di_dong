import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Placeholder({ label, emoji }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.sub}>Coming soon</Text>
    </View>
  );
}

export function FavoritesScreen() {
  return <Placeholder label="Favorites" emoji="❤️" />;
}

export function CartScreen() {
  return <Placeholder label="Cart" emoji="🛍️" />;
}

export function NotificationsScreen() {
  return <Placeholder label="Notifications" emoji="🔔" />;
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#F9F2EC',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  emoji: { fontSize: 52 },
  label: { fontSize: 22, fontWeight: '800', color: '#2F2D2C' },
  sub: { fontSize: 14, color: '#ADADAD' },
});