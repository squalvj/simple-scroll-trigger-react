import React, { Component, Fragment } from 'react'
import {get, debounce, isEmpty} from 'lodash'
import './Home.scss'
import Hero from 'components/Hero'
import Cookies from 'components/Cookies'
import GreyWrapper from 'components/GreyWrapper'
import ContentGrid from 'components/ContentGrid'
import Newsletter from 'components/Newsletter'
import Footer from 'components/Footer'
import ButtonCommon from 'components/Button/ButtonCommon'
import {
   faCoffee, 
   faComment,
   faPaintBrush,
   faVolumeUp
} from '@fortawesome/free-solid-svg-icons'
export default class Home extends Component {
   _isMounted = false;
   _cookies = '';
   _overflow = {}
   
   constructor(props) {
      super(props);
      this.state = {
         height: 60,
         cookieVisible: true,
         newsLetterVisible: false,
         data: [
            {
               title: 'Consult',
               icon: faComment,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
            {
               title: 'Design',
               icon: faPaintBrush,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
            {
               title: 'Develop',
               icon: faCoffee,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
            {
               title: 'Marketing',
               icon: faVolumeUp,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
            {
               title: 'Manage',
               icon: faComment,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
            {
               title: 'Evolve',
               icon: faCoffee,
               content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mi, ornare sed urna id, porttitor fringilla purus. Nam posuere sodales viverra. In hac habitasse platea dictumst. Ut sit amet turpis nec odio convallis sollicitudin. Aliquam sollicitudin augue ac convallis rutrum. Pellentesque'
            },
         ]
      };
   }

   componentDidMount() {
      this._isMounted = true;
      const height = this._cookies.clientHeight;
      this.setState({ height });
      this._overflow.addEventListener('scroll', this.trackScrolling);
   }

   componentWillUnmount() {
      this._isMounted = false;
      this._overflow.removeEventListener('scroll', this.trackScrolling);
   }

   handleHideCookie = () => {
      this.setState({
         cookieVisible: false,
      }, this.setState({
         height: 0
      }))
   }

   trackScrolling = () => {
      const wrappedElement = document.getElementById('content-grid');
      if (this.isBottom(wrappedElement)) {
         this.setState({
            newsLetterVisible: true
         })
         this._overflow.removeEventListener('scroll', this.trackScrolling);
      }
   };

   isBottom(el) {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
   }

   render() {
      const {
         data,
         cookieVisible,
         height,
         newsLetterVisible
      } = this.state
      console.log({newsLetterVisible})
      return (
         <div className="wrapper-home" style={{
            paddingBottom: height
         }}>
            <div ref={ref => this._cookies = ref}>
               <Cookies visible={cookieVisible} handleClick={this.handleHideCookie}/>
            </div>
            <div className="overflow" ref={ref => this._overflow = ref}>
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

               <GreyWrapper>
                  <div className="wrapper-text flex a-center f-column">
                     <h1>
                        How can i help you ?
                     </h1>
                     <p className="t-center">
                     Our work then targeted, best practices outcomes sociel innovation synergy.<br/>
                     Venture philanthropy, revultionary inclusive policymaker relief. User-centered program areas scale.
                     </p>
                  </div>
               </GreyWrapper>

               <GreyWrapper>
                  <ContentGrid data={data} />
               </GreyWrapper>
            
               <Footer />
               <Newsletter visible={newsLetterVisible} handleClick={() => this.setState({newsLetterVisible: false})}/>
            </div>
         </div>
      )
   }
}
