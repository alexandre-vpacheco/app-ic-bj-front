import React, { createContext, useState } from 'react';

// Cria o contexto
export const PointsContext = createContext();

// Provedor do contexto
export const PointsProvider = ({ children }) => {
  const [totalPoints, setTotalPoints] = useState(0);

  const [totalDescartes, setTotalDescartes] = useState(0);

  // Função para adicionar pontos
  const addPoints = (points) => {
    setTotalPoints((prevPoints) => prevPoints + points);
    setTotalDescartes((prevDescartes) => prevDescartes + 1);
  };

  return (
    <PointsContext.Provider value={{ totalPoints, totalDescartes, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
