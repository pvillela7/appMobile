import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';

export const PremiumScreen = () => {
  const { translate } = useLanguage();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translate('screen.premium')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});