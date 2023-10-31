import React, { createContext, useContext, useState } from 'react';
import Loading from '../Components/Loading';
import { useNavigation } from '@react-navigation/native';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [visible, setVisible] = useState(false);

  const [user, setUser] = useState('');

  const navigation = useNavigation();

  const login = async (username, password) => {

    console.log('Chegou aqui')

    const url = "https://app-ic-bj-back-production.up.railway.app/api/auth/login";
    //const url = "http://localhost:5000/api/auth/login";

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser({ nameid: data.nameid });
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
          navigation.navigate('HomePage');
        }, 500)
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      <Loading visible={visible} />
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};