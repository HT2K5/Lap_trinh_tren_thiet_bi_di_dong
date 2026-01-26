import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.square, { backgroundColor: 'aqua' }]}>Square 1</Text>
      <Text style={[styles.square, { backgroundColor: '#008080' }]}>Square 2</Text>
      <Text style={[styles.square, { backgroundColor: '#ff6666' }]}>Square 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    margin: 20,
    backgroundColor: 'gray',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 100,
  },
});
