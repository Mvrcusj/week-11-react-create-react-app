import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  // `constructor` is part of `class` and React components
  // always called when an instance of our class is created
  // aka `construct`d
  constructor (props) {
    super(props)
    // bad code: this.state.displayTime = ''
    // we must set state to an object
    this.state = {
      displayTime: ''
    }
    this.state = {
      visitorName: ''
    }
  }

  // `componentDidMount` is standard in React
  // this is where we load data or otherwise initialize data
  componentDidMount () {
    this.timerID = setInterval(() => {
      // call the `tick`
      this.tick()
    }, 1000);
  }

  // custom method as seen on reactjs.org
  tick () {
    console.log("In tick")
    this.setState({
      // displayTime: new Date().toString for 24 hour time
      displayTime: new Date().toLocaleTimeString(),
      visitorName: 'whoever you are!'

    })
  }

  // `render` is standard for getting html into our webpage
  render () {
    const displayTime = this.state.displayTime;
    const visitorName = this.state.visitorName;

    return (
    <div className="clock">
      <h2>Time is {displayTime}</h2>
      <div>Thanks for visiting {visitorName}</div>
    </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
      </header>
      <Clock />
    </div>
  )
}

export default App;
