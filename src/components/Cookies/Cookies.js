import React, {useState} from 'react'
import Fade from 'components/Animation/Fade'
import ButtonBlue from 'components/Button/ButtonBlue';
import './Cookies.scss'
const Cookies = () => {
   const [visible, setVisible] = useState(true);
   return (
      <div className="wrapper-cookies">
         <Fade visible={visible}>
            <div className="container wrapper-cookies special flex">
               <p>
                  By accessing and using this website, you acknowledge that you have read and understand our <a href="#">Cookie Policy,</a> <a href="#">Privacy Policy, </a>and our <a href="#">Terms of Service</a>
               </p>
               <div className="flex a-center">
                  <ButtonBlue handleClick={() => setVisible(false)}>
                     Got it
                  </ButtonBlue>
               </div>
            </div>
         </Fade>
      </div>
   )
}

export default Cookies