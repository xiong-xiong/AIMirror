import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Greeting from './modules/greeting'

class Juha extends Component {


  componentDidMount (){


  }


  render() {




    return (

      <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
      <div className='xiong-headline-banner'>
        <Greeting personName="Juha"/>
      </div>
        <div className='xiongSingleArticle'>


        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default Juha;
