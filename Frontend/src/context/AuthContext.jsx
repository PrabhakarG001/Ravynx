import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginApi, registerApi, getMeApi } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('ravynx_token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (token) {
        try {
          const res = await getMeApi();
          if (res.success) {
            setUser(res.user);
          }
        } catch (err) {
          console.warn('[AuthContext] Session expired or server unavailable');
          // Keep demo state
          setUser({
            name: 'Underwriter',
            email: 'underwriter@ravynx.ai',
            role: 'Underwriter',
            company: 'Ravynx Financial Desk',
          });
        }
      } else {
        // Default guest/demo user for instant access
        setUser({
          name: 'Vikram Sethi',
          email: 'underwriter@ravynx.ai',
          role: 'Underwriter',
          company: 'Ravynx Financial Services',
        });
      }
      setLoading(false);
    };

    fetchCurrentUser();
  }, [token]);

  const login = async (credentials) => {
    const res = await loginApi(credentials);
    if (res.success && res.token) {
      localStorage.setItem('ravynx_token', res.token);
      setToken(res.token);
      setUser(res.user);
    }
    return res;
  };

  const register = async (userData) => {
    const res = await registerApi(userData);
    if (res.success && res.token) {
      localStorage.setItem('ravynx_token', res.token);
      setToken(res.token);
      setUser(res.user);
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem('ravynx_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
