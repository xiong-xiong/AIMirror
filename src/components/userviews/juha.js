import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



class Home extends Component {


  componentDidMount (){
    //JUHA.BLOG REQUEST

        let juhaBlogRequest = new XMLHttpRequest();

        juhaBlogRequest.open('GET', 'http://juha.blog/wp-json/wp/v2/posts');



          if (juhaBlogRequest.status >= 200 && juhaBlogRequest.status < 400) {
            let JBData = JSON.parse(juhaBlogRequest.responseText);
            console.log(JBData);

            createHTML(JBData);

          } else {
            console.log("We connected to the server, but it returned an error.");
          }


        juhaBlogRequest.onerror = function errorlog() {
          console.log("Connection error");
        };

        juhaBlogRequest.send();



    function createHTML(postsJBData) {


    }

  }


  render() {




    return (

      <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
      <div className='xiong-headline-banner'>
        <h2>Goog morning Juha</h2>
      </div>
        <div className='xiongSingleArticle'>




        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default Home;