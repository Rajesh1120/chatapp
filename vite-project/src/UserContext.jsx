import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get('/profile').then(response => {
      
      setId(response.data.userId);
      setUsername(response.data.username);
    })
    .catch(err=>{
      if (err.response && err.response.status === 401) {
      // Handle unauthorized access
        console.log("loading")
      
    }});

  }, []);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}