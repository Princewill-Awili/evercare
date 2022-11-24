import './navitem.css'
import { useContext } from 'react'
import { states } from '../../utils/context'
import { useNavigate } from 'react-router-dom';

const NavItem = ({text}) => {
  const {activeSection,setActiveSection, setLoading,setShowMobileMenu} = useContext(states);
  const navigate = useNavigate();
  return (
    <div 
      className={activeSection === text ? 'navItem navActive': 'navItem'} 
      onClick={
        e =>{
              setShowMobileMenu(false);
              setLoading(true);
              setTimeout(()=> setLoading(false),1000)
              if(text === "Log Out"){
                setActiveSection("Menu");
                localStorage.setItem('currentSection',JSON.stringify("Menu"))
                navigate('/');
              }else{
                setActiveSection(text);
              }
              
            }
          } 
    >{text}</div>
  )
}

export default NavItem