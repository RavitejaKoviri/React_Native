import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

type AuthContextType = {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: async () => false,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const session = await AsyncStorage.getItem('userSession');
      setIsLoggedIn(!!session);
    } catch (error) {
      console.error('Error checking session:', error);
    }
  };

  // const login = async (username: string, password: string) => {
  //   try {
  //     if (username === 'user' && password === '123') {
  //       await AsyncStorage.setItem('userSession', 'true');
  //       setIsLoggedIn(true);
  //       router.replace('/(app)');
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     return false;
  //   }
  // };





  const login = async (username: string, password: string) => {
    try {
      const response = await fetch(
        `http://www.textileerp.timeserasoftware.in/api/Tenant/CheckValidTenant?userName=${username}&password=${password}`,
        {
          method: 'GET',
          headers: {
            'accept': '*/*',
            'tenantName': 'Hq975eIDSVP1hfE9exLODw==',
          },
        }
      );
  
      if (response.status === 200) {
        await AsyncStorage.setItem('userSession', 'true');
        setIsLoggedIn(true);
        router.replace('/(app)');
        return true;
      }
  
      return false;
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };
  

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userSession');
      setIsLoggedIn(false);
      router.replace('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);