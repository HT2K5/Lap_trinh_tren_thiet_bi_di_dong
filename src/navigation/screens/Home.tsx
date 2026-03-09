import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          source={require('../../assets/Mask Group.png')}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>

      <View style={styles.grid}>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ScanNew')}>
          <View style={[styles.iconWrapper, { backgroundColor: "#EAE8F5" }]}>
            <Image source={require('../../assets/Group 157.png')} style={[styles.iconImg, { width: 50, height: 50 }]} />
          </View>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#F5EAE8" }]}>
            <Image source={require('../../assets/Frame.png')} style={styles.iconImg} />
          </View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#E8F5EA" }]}>
            <Image source={require('../../assets/Group 158.png')} style={styles.iconImg} />
          </View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#E8F0F5" }]}>
            <Image source={require('../../assets/Group 151.png')} style={styles.iconImg} />
          </View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  hello: {
    fontSize: 22,
    fontWeight: "600",
    color: "black"
  },

  name: {
    fontSize: 14,
    color: "gray",
    marginTop: 3
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#ccc"
  },

  title: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 25,
    marginBottom: 40,
    color: "black"
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "48%",
    backgroundColor: "#EDEDED",
    borderRadius: 30,
    padding: 40,
    paddingVertical: 55,
    marginBottom: 15,
    alignItems: "center"
  },

  iconWrapper: {
    width: 55,
    height: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  iconImg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },

  cardSub: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },

});