import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { mockNews } from '../mocks/mockNews';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mockNews.map((news) => (
        <TouchableOpacity
          key={news.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('NewsDetail', { newsId: news.id })
          }
        >
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.subtitle}>{news.subtitle}</Text>
          <Text style={styles.date}>{news.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 14, marginBottom: 8, color: '#555' },
  date: { fontSize: 12, color: '#888' },
});

export default HomeScreen;
