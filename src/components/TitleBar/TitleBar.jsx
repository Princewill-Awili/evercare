import './titlebar.css'

const TitleBar = ({svg,txt,color,extras}) => {
  return (
    <div className='titlebar'>
     <div className="svgWrapper" style={{backgroundColor: color}}>
          {svg}
     </div>
     <div className="txtWrapper">
          {txt}
     </div>
     {extras}
    </div>
  )
}

export default TitleBar