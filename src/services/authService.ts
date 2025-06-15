// import { User } from '../types/Auth';

// export const loginService = async (email: string, password: string): Promise<User> => {
//   // Simulação de requisição à API (trocar URL e estrutura conforme seu backend)
//   const response = await fetch('https://sua-api.com/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password })
//   });

//   if (!response.ok) {
//     throw new Error('Erro ao fazer login');
//   }

//   const data = await response.json();
//   return data.user; // ajuste conforme resposta real da API
// };

// export const logoutService = async (): Promise<void> => {
//   // Se necessário, envie logout para a API
//   return;
// };

import { User } from '../types/Auth';
import { MOCK_USER } from '../mocks/mockAuthService';
import { getTranslate } from '../contexts/LanguageContext';

const translate = getTranslate();

export const loginService = async (email: string, password: string): Promise<User> => {
  if (email === MOCK_USER.email && password === '123456') {
    return MOCK_USER;
  }
  throw new Error(translate('login.invalid'));
};

export const logoutService = async (): Promise<void> => {
  return;
};