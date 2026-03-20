import { StyleSheet, View, Text } from 'react-native';

export function Profile({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.user}'s Profile</Text>
    </View>
  );
}

export function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export function Updates() {
  return (
    <View style={styles.container}>
      <Text>Updates Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});