import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';

export function ScanNew() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

      <View style={styles.scanArea}>
        <Image
          source={require('./assets/Group 5.png')}
          style={styles.scanImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.productThumbWrapper}>
          <Image
            source={require('./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')}
            style={styles.productThumbImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productOwner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#6B7AFF',
  },
  backArrow: {
    fontSize: 40,
    color: '#6B7AFF',
    marginTop: -2,
  },
  scanArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 80,
  },
  scanImage: {
    width: 320,
    height: 800,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6B7AFF',
  },
  productThumbWrapper: {
    width: 50,
    height: 70,
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
  },
  productThumbImage: {
    width: 50,
    height: 70,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
  },
  productOwner: {
    fontSize: 13,
    color: 'gray',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#6B7AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 26,
    color: 'white',
    marginTop: -2,
  },
});