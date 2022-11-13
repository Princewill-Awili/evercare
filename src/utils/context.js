import { useState,createContext } from "react";
import { sampleUser } from "./dummyData";


export const states = createContext();

export const StateProvider = ({children}) => {

     const [activeSection, setActiveSection] = useState(JSON.parse(localStorage.getItem('currentSection')));
     const [user,setUser] = useState(sampleUser);

     return (
          <states.Provider value={{activeSection, setActiveSection, user,setUser}}>
               {children}
          </states.Provider>
     )
}