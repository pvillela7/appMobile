export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (data: { name: string; email: string; password: string }) => Promise<void>;
}
