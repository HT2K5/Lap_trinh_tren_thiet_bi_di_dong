import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Payment } from './Payment';
import { Success } from './Success';

const Stack = createNativeStackNavigator();

export function PaymentStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}