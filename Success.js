import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Success() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Back → quay lại Payment */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <View style={styles.illustrationWrapper}>
          <Image
            source={require('./assets/Group_167.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.heading}>
          Payment Success, Yayy!
        </Text>

        <Text style={styles.sub}>
          we will send order details and invoice in{"\n"}
          your contact no. and registered email
        </Text>

        {/* Check Details (không chuyển trang) */}
        <TouchableOpacity style={styles.detailsRow}>
          <Text style={styles.detailsText}>Check Details</Text>
          <Text style={styles.detailsArrow}> →</Text>
        </TouchableOpacity>

        {/* Download Invoice (không làm gì) */}
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>
            Download Invoice
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 15,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backArrow: {
    fontSize: 28,
    color: '#6B7AFF',
  },

  illustrationWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
  },

  illustration: {
    width: 260,
    height: 260,
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 12,
  },

  sub: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  detailsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6B7AFF',
  },

  detailsArrow: {
    fontSize: 15,
    color: '#6B7AFF',
  },

  downloadBtn: {
    backgroundColor: '#6B7AFF',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },

  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

});