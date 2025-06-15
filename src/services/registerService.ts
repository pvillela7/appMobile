import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/Auth';

const USERS_KEY = '@Auth:users';

export const registerService = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const usersJson = await AsyncStorage.getItem(USERS_KEY);
  const users = usersJson ? JSON.parse(usersJson) : [];

  const existing = users.find((u: any) => u.email === email);
  if (existing) {
    throw new Error('register.exists');
  }

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    token: ''
  };

  const updatedUsers = [...users, { ...newUser, password }];
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  return newUser;
};
