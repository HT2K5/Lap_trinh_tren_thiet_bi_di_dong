import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const phone = route.params?.phone ?? '0xxx xxx xxx';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang chủ</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Chào mừng bạn đã đến</Text>
        <Text style={styles.courseText}>khóa học lập trình</Text>
        <Text style={styles.highlight}>React Native</Text>

        <Text style={styles.phoneLabel}>Số điện thoại</Text>
        <Text style={styles.phoneNumber}>{phone}</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
  },
  courseText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
  },
  highlight: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 40,
  },
  phoneLabel: {
    fontSize: 13,
    color: '#999',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  logoutButton: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#FF3B30',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});