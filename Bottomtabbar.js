import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export function BottomTabBar({ activeTab }) {
  const navigation = useNavigation();

  const tabs = [
    { name: 'Home',    icon: require('./assets/home.png'),    screen: 'HomeTabs' },
    { name: 'Bell',    icon: require('./assets/bell1.png'),   screen: 'HomeTabs' },
    { name: 'Scan',    icon: require('./assets/scan.png'),    screen: 'ScanNew'  },
    { name: 'History', icon: require('./assets/history.png'), screen: 'HomeTabs' },
    { name: 'Cart',    icon: require('./assets/cart.png'),    screen: 'Cart'     },
  ];

  return (
    <View style={styles.bar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tabItem}
          onPress={() => navigation.navigate(tab.screen)}
        >
          <Image
            source={tab.icon}
            style={[
              styles.icon,
              { tintColor: activeTab === tab.name ? '#E87A47' : '#aaa' }
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  tabItem: {
    alignItems: 'center',
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});