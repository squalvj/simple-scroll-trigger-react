import React, { Component, Fragment } from 'react'
import {get, debounce, isEmpty} from 'lodash'
import './Home.scss'
import Hero from 'components/Hero'
import Cookies from 'components/Cookies'
import ButtonCommon from 'components/Button/ButtonCommon'

export default class Home extends Component {
   _isMounted = false;
   
   constructor(props) {
      super(props);
      this.state = {
         
      };
   }

   componentDidMount() {
      this._isMounted = true;
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {
      return (
         <div className="wrapper-home">
            <Cookies/>
            <div className="overflow">
               <Hero>
                     <img alt="logo" className="logo" src={require('styles/img/logo.png')} />
                     <h1>
                        Hello! I'm Aditya Wiraha
                     </h1>
                     <h2>
                        Consult, Design, and Develop Websites
                     </h2>
                     <p>
                        Have something great in mind ? Feel free to contact me.
                        <br/>
                        I'll help you to make it happen.
                     </p>
                     <ButtonCommon>
                        LET'S MAKE CONTACT
                     </ButtonCommon>
               </Hero>
            </div>
         </div>
      )
   }
}
