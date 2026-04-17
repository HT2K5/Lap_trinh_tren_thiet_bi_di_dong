
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import CartScreen from "./CartScreen";
import FavouriteScreen from "./FavouriteScreen";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#7C7C7C",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
          borderTopColor: "#F2F3F2",
        },
        tabBarIcon: ({ focused, color }) => {
          const icons = {
            Shop: focused ? "storefront" : "storefront-outline",
            Explore: focused ? "compass" : "compass-outline",
            Cart: focused ? "cart" : "cart-outline",
            Favourite: focused ? "heart" : "heart-outline",
            Account: focused ? "person" : "person-outline",
          };
          return (
            <Ionicons
              name={icons[route.name]}
              size={24}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}