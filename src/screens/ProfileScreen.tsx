import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../contexts/LanguageContext';

export const ProfileScreen = () => {
  const { user, signOut } = useAuth();
  const { translate } = useLanguage();

  

  return (

    <View style={styles.container}>
      <Text style={styles.title}>{translate('screen.profile')}</Text>
      {user && (
        <>
          <Text style={styles.text}>{translate('profile.name')}: {user.name}</Text>
          <Text style={styles.text}>{translate('profile.email')}: {user.email}</Text>
        </>
      )}

      <Button title="Sair" onPress={signOut} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});