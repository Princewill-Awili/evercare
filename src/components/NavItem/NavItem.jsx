import './navitem.css'
import { useContext } from 'react'
import { states } from '../../utils/context'

const NavItem = ({text}) => {
  const {activeSection,setActiveSection} = useContext(states);
  return (
    <div className={activeSection === text ? 'navItem navActive': 'navItem'} onClick={e => setActiveSection(text)} >{text}</div>
  )
}

export default NavItem