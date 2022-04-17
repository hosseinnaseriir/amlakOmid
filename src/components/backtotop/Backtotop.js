import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import './Backtotop.css'
const Backtotop = () =>{
  
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50){
      setVisible(true)
    } 
    else if (scrolled <= 50){
      setVisible(false)
    }
  };
  const goTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div onClick={goTop} 
      style={{display: visible ? 'flex' : 'none'}} className="Backtotop bg-es align-items-center justify-content-center">
      <FontAwesomeIcon className='text-white' icon={faArrowUp}/>
    </div>
  );
}
  
export default Backtotop;