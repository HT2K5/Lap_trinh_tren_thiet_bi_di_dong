import { NavigationContainer } from '@react-navigation/native';
import { PaymentStack } from './PaymentStack';

export default function App() {
  return (
    <NavigationContainer>
      <PaymentStack />
    </NavigationContainer>
  );
}