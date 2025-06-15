import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ClassesScreen } from '../screens/ClassesScreen';
import { PremiumScreen } from '../screens/PremiumScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../contexts/LanguageContext';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { translate } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === translate('tab.home')) {
            iconName = 'home';
          } else if (route.name === translate('tab.classes')) {
            iconName = 'book';
          } else if (route.name === translate('tab.premium')) {
            iconName = 'star';
          } else if (route.name === translate('tab.profile')) {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={translate('tab.home')} component={HomeScreen} />
      <Tab.Screen name={translate('tab.classes')} component={ClassesScreen} />
      <Tab.Screen name={translate('tab.premium')} component={PremiumScreen} />
      <Tab.Screen name={translate('tab.profile')} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
