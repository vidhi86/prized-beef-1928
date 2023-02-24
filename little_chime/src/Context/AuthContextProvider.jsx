import React, { createContext,useState } from 'react'; 



export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userName,setUserName] = useState("");
  const login = (name) => {
    setIsAuth(true);
    setUserName(name);
  };
  const logout=()=>{
    setIsAuth(false);
  }
  console.log(isAuth,userName);

  return (
    <AuthContext.Provider value={{ isAuth, login ,logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;