
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

type AuthContextType = {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  username: null,
  login: async () => false,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const session = await AsyncStorage.getItem("userSession");
      if (session) {
        const { isLoggedIn, username } = JSON.parse(session);
        setIsLoggedIn(isLoggedIn || false);
        setUsername(username || null);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setIsLoggedIn(false);
      setUsername(null);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      // Allow hardcoded login
      if (username === "user" && password === "123") {
        await AsyncStorage.setItem("userSession", JSON.stringify({ isLoggedIn: true, username }));
        setIsLoggedIn(true);
        setUsername(username);
        router.replace("/(app)");
        return true;
      }

      // Otherwise, proceed with API authentication
    //   const response = await fetch(
    //     `http://www.textileerp.timeserasoftware.in/api/Tenant/CheckValidTenant?userName=${username}&password=${password}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         accept: "*/*",
    //         tenantName: "Hq975eIDSVP1hfE9exLODw==",
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     console.error(`Login failed: ${response.status} ${response.statusText}`);
    //     return false;
    //   }

    //   // Store user session with username
    //   await AsyncStorage.setItem("userSession", JSON.stringify({ isLoggedIn: true, username }));

    //   setIsLoggedIn(true);
    //   setUsername(username);
    //   router.replace("/(app)");
    //   return true;
    }
     catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userSession");
      setIsLoggedIn(false);
      setUsername(null);
      router.replace("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
