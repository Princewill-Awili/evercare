import { useState,createContext } from "react";


export const states = createContext();

export const StateProvider = ({children}) => {

     const [activeSection, setActiveSection] = useState("Menu")

     return (
          <states.Provider value={{activeSection, setActiveSection}}>
               {children}
          </states.Provider>
     )
}