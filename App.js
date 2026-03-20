import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Cart } from './Cart';
import { ScanNew } from './Scannew';
import { Payment } from './Payment';
import { Success } from './Success';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ScanNew" component={ScanNew} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}