import  './menuTabs.css'

const MenuTabs = ({svg,bg,textA, textB}) => {
  return (
    <div className='menuTabs'>
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