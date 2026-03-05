'use client';

import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { IUserBase } from "@/lib/interfaces/IUser";
import { authService } from "@/service/auth.service";
import { api } from "@/service/api";

type UserProviderProps = {
  children: ReactNode;
};

type UserContextType = {
  userInfo: IUserBase | null;
  token: string | null;
  isAuthenticated: boolean;
  putUserData: (authData: { user: IUserBase; token: string }) => void;
  userLogout: () => void;
};

// 🔹 Criação do contexto
const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState<IUserBase | null>(null);
  const [token, setToken] = useState<string | null>(null);

  /**
   * Salva os dados do usuário logado
   */
  const putUserData = (authData: { user: IUserBase; token: string }) => {
    const { user, token } = authData;

    setUserInfo(user);
    setToken(token);

    // 🔹 Persistência local
    localStorage.setItem("userData", JSON.stringify(authData));

    // 🔹 Define token global no Axios
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  /**
   * Remove dados do usuário (logout)
   */
  const userLogout = async () => {
    try {
      await authService.logout(); // dispara POST /auth/logout
    } catch {
      console.warn("Logout local executado (falha na requisição).");
    }

    setUserInfo(null);
    setToken(null);

    localStorage.removeItem("userData");
    delete api.defaults.headers.common.Authorization;
  };

  /**
   * Recupera usuário armazenado (persistência)
   */
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (parsed?.token && parsed?.user) {
          setUserInfo(parsed.user);
          setToken(parsed.token);
          api.defaults.headers.common.Authorization = `Bearer ${parsed.token}`;
        }
      } catch (err) {
        console.error("Erro ao restaurar userData:", err);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        token,
        isAuthenticated: !!token,
        putUserData,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook personalizado para acessar o contexto de usuário
 */
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
