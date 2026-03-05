import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation<any>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhone = (phone: string) => {
    return /^0\d{9}$/.test(phone);
  };

  const formatPhone = (phone: string) => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d{3})(\d{0,3})/, (_: string, p1: string, p2: string, p3: string) =>
        p3 ? `${p1} ${p2} ${p3}` : p2 ? `${p1} ${p2}` : p1
      );
  };

  const handleChangeText = (text: string) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 10);
    const formatted = formatPhone(cleaned);
    setPhoneNumber(formatted);

    if (cleaned.length === 0) {
      setError('');
      return;
    }

    if (!validatePhone(cleaned)) {
      setError('Số điện thoại không đúng định dạng');
    } else {
      setError('');
    }
  };

  const handleContinue = () => {
    const cleaned = phoneNumber.replace(/\D/g, '');

    if (cleaned.length === 0) {
      setError('Vui lòng nhập số điện thoại');
      Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại', [{ text: 'OK' }]);
      return;
    }

    if (!validatePhone(cleaned)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      Alert.alert('Thông báo', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại', [{ text: 'OK' }]);
      return;
    }

    setError('');
    Alert.alert('Thành công', 'Đăng nhập thành công!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('HomeTabs', { screen: 'Home', params: { phone: phoneNumber } }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handleChangeText}
      />

      {error !== '' && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 30,
  },
  desc: {
    fontSize: 13,
    paddingBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 16,
    color: '#555',
  },
});