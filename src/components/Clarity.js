import React, { Component }  from 'react';
import '../style/appsStyle.css';

class Clarity extends Component {

  componentDidMount() {
    document.querySelector('.selectionContainer').classList.add("fixBorder");
  }

  componentWillUnmount() {
    document.querySelector('.selectionContainer').classList.remove("fixBorder");
  }

  render() {
    return (

      <div className="container">
        <div className="groupHead">
          <p className="countries">
            Australia, Austria, Bahrain, Belgium, Czech Republic, Denmark, Finland, France, Germany, Hong Kong, Ireland, Israel, Italy, Jordan, Kuwait, Lebanon, Luxembourg, Netherlands, New Zealand, Norway, Oman, Poland, Qatar, Saudi Arabia, South Africa, South Korea, Spain, Sweden, Switzerland, UAE, United Kingdom
          </p>
        </div>
        <div className="left">
          <p>
            Dexcom CLARITY App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/clarity.jpg" alt="Clarity App"/>
        </div>
        <div className="right">
          <p className="insideText">
            <i className="fab fa-android"></i>
            <strong> Android</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              Any device running Android version 6.0 or later
            </li>
          </ul>
          <p className="insideText">
            <i className="fab fa-apple"></i>
            <strong> Apple</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              Compatible with iPhone, iPad, and iPad touch
            </li>
            <li className="insideText">
              Requires iOS 10.3 or later
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Clarity;
