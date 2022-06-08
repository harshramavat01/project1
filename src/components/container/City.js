import React, { Component } from 'react'

 class City extends Component {

    constructor(props) {
        super(props);

        this.state = {
            CityName : 'SUrat'
        }
        
    }
    ChangeCity = () => {
        this.setState({
            CityName : 'US'
        });
    }
    


  render() {
    return (
      <div>
          <p>{this.state.CityName}</p>
          <button onClick={() => this.ChangeCity()}>Change City</button>
      </div>
    )
  }
}


export default City;
