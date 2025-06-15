import React, { useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';
import { AuthContextType, User } from '../types/Auth';
import { loginService, logoutService } from '../services/authService';
import { registerService } from '../services/registerService';

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const userData = await AsyncStorage.getItem('@Auth:user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    loadStorageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await loginService(email, password);

    console.log('Usuário logado:', response);

    setUser(response);
    await AsyncStorage.setItem('@Auth:user', JSON.stringify(response));
  };

  const signUp = async (data: { name: string; email: string; password: string }) => {
    const newUser = await registerService(data.name, data.email, data.password);
    setUser(newUser);
    await AsyncStorage.setItem('@Auth:user', JSON.stringify(newUser));
  };

  const signOut = async () => {
    await logoutService();
    setUser(null);
    await AsyncStorage.removeItem('@Auth:user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
