import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext';

const ClassesScreen = () => {
  const { translate } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translate('screen.classes')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default ClassesScreen;
