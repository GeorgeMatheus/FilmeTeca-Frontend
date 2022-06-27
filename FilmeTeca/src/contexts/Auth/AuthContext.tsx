import { createContext } from "react";
import { Usuario } from "../../hooks/tipos";

 export type AuthContextType = {
  user: Usuario | null;
  login: (email: string, senha: string) => Promise<boolean>
  logout: () => void
 }

 export const AuthContext = createContext<AuthContextType>(null!)