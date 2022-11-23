import './navitem.css'
import { useContext } from 'react'
import { states } from '../../utils/context'

const NavItem = ({text}) => {
  const {activeSection,setActiveSection, setLoading,setShowMobileMenu} = useContext(states);
  return (
    <div className={activeSection === text ? 'navItem navActive': 'navItem'} onClick={e =>{
      setShowMobileMenu(false);
      setLoading(true);
      setTimeout(()=> setLoading(false),1000)
      setActiveSection(text);
    }} >{text}</div>
  )
}

export default NavItem