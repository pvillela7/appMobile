import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';


export const LoginScreen: React.FC = () => {
  const { signIn, signUp  } = useAuth();
  const { language, setLanguage, translate } = useLanguage();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signIn(email, password);
    } catch (error: any) {
      Alert.alert(translate('login.error'), error.message || translate('login.invalid'));
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await signUp({ name, email, password });
      Alert.alert(translate('register.success'));
    } catch (error: any) {
      Alert.alert(translate('login.error'), error.message || translate('register.exists'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageToggle}>
        <LanguageToggle />
      </View>

      <Text style={styles.title}>
        {isLogin ? translate('form.login.title') : translate('form.register.title')}
      </Text>

      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder={translate('form.name')}
          value={name}
          onChangeText={setName}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder={translate('form.email')}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder={translate('form.password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={
          loading
            ? translate(isLogin ? 'loading.login' : 'loading.register')
            : translate(isLogin ? 'tab.login' : 'tab.register')
        }
        onPress={handleLogin }
        disabled={loading}
      />

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#007AFF' }}>
          {isLogin ? translate('tab.register') : translate('tab.login')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  languageToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
