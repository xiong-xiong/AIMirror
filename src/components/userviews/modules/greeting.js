import React, { Component } from 'react';


class Greeting extends Component {


  componentDidMount (){


  }


  render() {

    //Figure out date, time, weekday and time of the day
    const date = new Date();
    const hours = date.getHours();
    const minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    const weekDayIndex = date.getDay();
    let weekday = 'monday';
    if(weekDayIndex == 0) {
      weekday = 'sunday'
    }else if(weekDayIndex == 1) {
      weekday = 'monday'
    }else if(weekDayIndex == 2) {
      weekday = 'tuesday'
    }else if(weekDayIndex == 3) {
      weekday = 'wednesday'
    }else if(weekDayIndex == 4) {
      weekday = 'thursday'
    }else if(weekDayIndex == 5) {
      weekday = 'friday'
    }else if(weekDayIndex == 6) {
      weekday = 'saturday'
    }
    const day = date.getDate();
    const month = date.getMonth()+1;
    let timeOfDay = 'morning';
    if (hours < 11 && hours > 5) {
      timeOfDay = 'morning';
    } else if (hours < 13 && hours > 11) {
      timeOfDay = 'day';
    } else if (hours < 18 && hours > 13) {
      timeOfDay = 'afternoon';
    } else if (hours < 21 && hours > 18) {
      timeOfDay = 'evening';
    } else {
      timeOfDay = 'night';
    }
    let person = this.props.personName;
    console.log(person)

    return (


      <div className='xiong-greeting'>
        <h2>Good {timeOfDay} {person}</h2>
        <p>It is {weekday} {day}.{month} and time is {hours}:{minutes}</p>
      </div>



    );
  }
}

export default Greeting;
