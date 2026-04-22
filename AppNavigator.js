import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import OnboardingScreen from './OnboardingScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { FavoritesScreen, CartScreen, NotificationsScreen } from './PlaceholderScreens';

const Stack = createStackNavigator();
const Tab   = createBottomTabNavigator();

const TAB_ICONS = {
  Home:          { active: 'home',          inactive: 'home-outline' },
  Favorites:     { active: 'heart',         inactive: 'heart-outline' },
  Cart:          { active: 'bag',           inactive: 'bag-outline' },
  Notifications: { active: 'notifications', inactive: 'notifications-outline' },
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          const { active, inactive } = TAB_ICONS[route.name];
          return (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Ionicons
                name={focused ? active : inactive}
                size={22}
                color={focused ? '#C67C4E' : '#B7B7B7'}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home"          component={HomeScreen} />
      <Tab.Screen name="Favorites"     component={FavoritesScreen} />
      <Tab.Screen name="Cart"          component={CartScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="MainTabs"   component={BottomTabs} />
      <Stack.Screen name="Detail"     component={DetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    height: 68,
    paddingHorizontal: 10,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
  },
  iconWrap: {
    width: 46, height: 46,
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 14,
  },
  iconWrapActive: { backgroundColor: '#FFF5EE' },
});