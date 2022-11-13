import './titlebar.css'

const TitleBar = ({svg,txt,extras}) => {
  return (
    <div className='titlebar'>
     <div className="svgWrapper">
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