import axios from 'axios';
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
  };
  const AddToCart = (obj) => {
    axios.post(`http://localhost:3004/cart`, obj).then((res) => {
      console.log(res);
    }).catch((err)=>{console.log(err);alert("Product Already Exist in Cart")});
  }
  const AddToShortlist = (obj) => {
    axios
      .post(`http://localhost:3004/shortlist`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Product Already Exist in Shortlist");
      });
  };
  const apiGetData=(category,page)=>{
    console.log(category);
    return axios.get(` http://localhost:3004/products`,{
      params:{
        category:category,
        _limit:9,
        _page:page,
      }
    });
  }
  console.log(isAuth,userName);

  return (
    <AuthContext.Provider value={{ isAuth, login ,logout,apiGetData,AddToCart,AddToShortlist}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;