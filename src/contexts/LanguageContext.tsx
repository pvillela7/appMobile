import React, { createContext, useState, ReactNode, useContext } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  translate: (key: string) => string;
}

const translations: Record<'pt' | 'en', Record<string, string>> = {
  pt: {
    'login.invalid': 'Email ou senha inválidos',
    'login.error': 'Erro ao fazer login',
    'login.success': 'Login realizado com sucesso',
    'register.success': 'Cadastro simulado com sucesso!',
    'register.exists': 'Usuário já existe.',
    'loading.login': 'Entrando...',
    'loading.register': 'Cadastrando...',
    'tab.login': 'Entrar',
    'tab.register': 'Cadastrar',
    'form.name': 'Nome',
    'form.email': 'Email',
    'form.password': 'Senha',
    'form.login.title': 'Login',
    'form.register.title': 'Cadastro',
    'language.pt': 'Português',
    'language.en': 'Inglês',
    'language.switch': 'Trocar idioma',
    'navbar.home': 'Início',
    'navbar.classes': 'Aulas',
    'navbar.premium': 'Área Premium',
    'navbar.profile': 'Perfil',
    'home.welcome': 'Bem-vindo à Home!',
    'classes.title': 'Todas as Aulas',
    'premium.title': 'Área para Assinantes',
    'profile.title': 'Meu Perfil',
    'profile.name': 'Nome',
    'profile.email': 'Email',
    'profile.logout': 'Sair',
  },
  en: {
    'login.invalid': 'Invalid email or password',
    'login.error': 'Login error',
    'login.success': 'Successfully logged in',
    'register.success': 'Registration completed successfully!',
    'register.exists': 'User already exists.',
    'loading.login': 'Logging in...',
    'loading.register': 'Registering...',
    'tab.login': 'Login',
    'tab.register': 'Register',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.password': 'Password',
    'form.login.title': 'Login',
    'form.register.title': 'Register',
    'language.pt': 'Portuguese',
    'language.en': 'English',
    'language.switch': 'Switch language',
    'navbar.home': 'Home',
    'navbar.classes': 'Classes',
    'navbar.premium': 'Premium Area',
    'navbar.profile': 'Profile',
    'home.welcome': 'Welcome to Home!',
    'classes.title': 'All Classes',
    'premium.title': 'Subscribers Only',
    'profile.title': 'My Profile',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.logout': 'Logout',
  }
};

let currentLang: 'pt' | 'en' = 'pt';

export const getTranslate = (lang?: 'pt' | 'en') => (key: string) => {
  const languageToUse = lang || currentLang;
  return translations[languageToUse][key] || key;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => { },
  translate: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  currentLang = language;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);