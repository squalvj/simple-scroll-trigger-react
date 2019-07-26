import React, { Component, Fragment } from 'react'
import {get, debounce, isEmpty} from 'lodash'
import './Home.scss'

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
         <div className="container wrapper-home">
            THIS IS HOME
         </div>
      )
   }
}
