import React, { createContext, useContext, useState } from 'react';
import Loading from '../Components/Loading';
import { useNavigation } from '@react-navigation/native';

const UserContext = createContext();



export const UserProvider = ({ children }) => {

  const [visible, setVisible] = useState(false);

  const [user, setUser] = useState('');

  const navigation = useNavigation();

  const login = async (username, password) => {

    try {
      const response = await fetch('https://app-ic-bj-back-production.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser({ nameid: data.nameid });
        alert('Login bem-sucedido!', data);
        navigation.navigate('HomePage');
        // setVisible(true);
        // setTimeout(() => {
        //   setVisible(false);
          
        // }, 500)
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