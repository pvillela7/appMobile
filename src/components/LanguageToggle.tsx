import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === 'pt' && styles.active]}
        onPress={() => setLanguage('pt')}
      >
        <Text style={styles.text}>PT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, language === 'en' && styles.active]}
        onPress={() => setLanguage('en')}
      >
        <Text style={styles.text}>EN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  active: {
    backgroundColor: '#007bff',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
});
