import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthProvider';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { useAuth } from './src/hooks/useAuth';
import LoginScreen from './src/screens/LoginScreen';
import StackNavigator from './src/navigation/StackNavigator';

const AppContent = () => {
  const { user } = useAuth();

  if (!user) return <LoginScreen />;

  return (
    <NavigationContainer>
      <StackNavigator />
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
