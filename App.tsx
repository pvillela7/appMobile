// App.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { AuthProvider } from './src/contexts/AuthProvider';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { useAuth } from './src/hooks/useAuth';
import { LoginScreen } from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';

const AppContent = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
