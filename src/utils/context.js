import { useState,createContext } from "react";


export const states = createContext();

export const StateProvider = ({children}) => {

     const [activeSection, setActiveSection] = useState(JSON.parse(localStorage.getItem('currentSection')));
     const [user,setUser] = useState({});
     const [users, setUsers] = useState([]);
     const [showMobileMenu, setShowMobileMenu] = useState(false);
     const [loading, setLoading] = useState(false)
     const [isLoggedOut, setIsLoggedOut] = useState(false);
     const [registration, setRegistration] = useState("");

     return (
          <states.Provider value={{registration, setRegistration,isLoggedOut, setIsLoggedOut,loading, setLoading,activeSection, setActiveSection,users, setUsers, user,setUser,showMobileMenu, setShowMobileMenu}}>
               {children}
          </states.Provider>
     )
}