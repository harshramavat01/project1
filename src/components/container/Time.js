import React, { Component } from 'react'

class Time extends Component {
    constructor(props) {
        super(props);

        //1. Used to set initial value to the component.
        this.state = {
            time :new Date()
        }
        
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        //3.Used to request data from server

        this.timeI = setInterval(() =>this.tick(), 1000);
    }

    componentDidUpdate =(prevProps, prevState) => {
        //4.Called Whenever particular state/props updated
        if (this.state.time !== prevState.Time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount = () => {
        //5.Called whenever we move to another component (Used to realese the resource)
        clearInterval(this.timeI);
    }
    
    //2.Called whenever state value changed
  render() {
    return (
      <div>
          <p>
              {this.state.time.toLocaleTimeString()}
          </p>
      </div>
    )
  }
}

export default Time;
