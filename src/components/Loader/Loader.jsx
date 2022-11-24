import './loader.css'

const Loader = ({text}) => {
  return (
    <div className='loader'>
     <div className="ring"></div>
     <span className='loadingText'>{text}</span>
    </div>
  )
}

export default Loader