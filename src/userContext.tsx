import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos dos dados do usuário
interface User {
  // username: string;
  // bio: string;
  // fotoPerfil: string;

    id: number | null;
    email: string;
    username: string;
    name: string;
    description: string | null;
    date_joined: string;
    date_of_birth: string | null;
    profile_picture: string;
}

// Estado inicial do usuário
const initialUserState: User = {
  id: null,
  email: '',
  username: '',
  name: '',
  description: '',
  date_joined: '',
  date_of_birth: '',
  profile_picture: '/robot_perfil.png'
  
};

// Tipos para o contexto
interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider do contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};