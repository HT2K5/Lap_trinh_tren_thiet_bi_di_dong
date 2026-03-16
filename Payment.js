import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

export function Payment() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Checkout 💳</Text>
          <View>
            <Text style={styles.amount}>₹ 1,527</Text>
            <Text style={styles.gst}>Including GST (18%)</Text>
          </View>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity style={[styles.tab, styles.tabActive]}>
            <Text style={styles.tabActiveText}>💳 Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Image
              source={require('./assets/Apple icon.png')}
              style={styles.tabIcon}
              resizeMode="contain"
            />
            <Text style={styles.tabText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Card number</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputFlex}
            value="5261 4141 0151 8472"
            keyboardType="numeric"
          />
          <View style={styles.inputIcons}>
            <Image
              source={require('./assets/Master Card Logo.png')}
              style={styles.cardBrandIcon}
              resizeMode="contain"
            />
            <Image
              source={require('./assets/Card Icon.png')}
              style={styles.scanIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.label}>Cardholder name</Text>
        <TextInput
          style={styles.input}
          value="Christie Doe"
        />

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput
              style={styles.input}
              value="06 / 2024"
              keyboardType="numeric"
            />
          </View>
          <View style={{ width: 16 }} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              value="915"
              secureTextEntry
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.note}>
          We will send you order details to your {'\n'} email after the successfull payment
        </Text>

        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.payText}>🔒 Pay for the order</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  header: {
    marginBottom: 40,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 28,
    color: '#22C55E',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  amount: {
    fontSize: 20,
    color: '#22C55E',
    fontWeight: '700',
  },
  gst: {
    fontSize: 12,
    color: '#888',
  },
  tabRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#22C55E',
  },
  tabText: {
    marginLeft: 6,
  },
  tabActiveText: {
    color: '#fff',
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#eee',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  inputFlex: {
    flex: 1,
    paddingVertical: 14,
  },
  inputIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  cardBrandIcon: {
    width: 36,
    height: 24,
  },
  scanIcon: {
    width: 26,
    height: 26,
  },
  row: {
    flexDirection: 'row',
  },
  note: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },
  payBtn: {
    backgroundColor: '#22C55E',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  payText: {
    color: '#fff',
    fontWeight: '700',
  },
});