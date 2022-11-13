import  './menuTabs.css'
import { useContext } from 'react'
import { states } from '../../utils/context'

const MenuTabs = ({svg,bg,textA, textB, section}) => {

  const {setActiveSection} = useContext(states);

  return (
    <div className='menuTabs' onClick={()=> setActiveSection(section)}>
     <div className="tabIconWrapper" style={{backgroundColor:bg}}>
          {svg}
     </div>
     <div className="texts">
          <span className="textA">{textA}</span>
          <span className="textB">{textB}</span>
     </div>
     
    </div>
  )
}

export default MenuTabs