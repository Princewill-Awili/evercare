import { useState,createContext } from "react";
import { sampleUser } from "./dummyData";


export const states = createContext();

export const StateProvider = ({children}) => {

     const [activeSection, setActiveSection] = useState(JSON.parse(localStorage.getItem('currentSection')));
     const [user,setUser] = useState({});
     const [users, setUsers] = useState([]);
     const [showMobileMenu, setShowMobileMenu] = useState(false);

     return (
          <states.Provider value={{activeSection, setActiveSection,users, setUsers, user,setUser,showMobileMenu, setShowMobileMenu}}>
               {children}
          </states.Provider>
     )
}