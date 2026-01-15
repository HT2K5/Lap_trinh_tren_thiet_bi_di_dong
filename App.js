import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Đăng nhập</Text>
      <Text style ={styles.label}>Nhập số điện thoại</Text>
      <Text style ={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
      style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:50,
  },

  label:{
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 30,
  },

  desc:{
    fontSize: 13,
    paddingBottom: 10,
  },

  input:{
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 30,
    marginBottom: 300,
  },

    button: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 16,
    color: '#555',
    
  },


  
});
