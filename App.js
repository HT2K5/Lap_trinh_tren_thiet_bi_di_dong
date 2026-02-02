import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [background, setBackground] = useState('green');

  const colors = [
    {name: 'GREEN', color: 'green'},
    {name: 'BLUE', color: 'blue'},
    {name: 'BROWN', color: 'brown'},
    {name: 'YELLOW', color: 'yellow', textColor:'black'},
    {name: 'RED', color: 'red'},
    {name: 'BLACK', color: 'black'},
  ]

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: item.color }]}
          onPress={() => setBackground(item.color)}
        >
          <Text style={[styles.buttonText, {color: item.textColor || 'white'}]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});