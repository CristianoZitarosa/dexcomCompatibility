import React, { Component }  from 'react';
import '../../style/appsStyle.css';

class Follow extends Component {

  componentDidMount() {
    document.querySelector('.selectionContainer').classList.add('fixBorder');
  }

  componentWillUnmount() {
    if (document.querySelector('.selectionContainer'))
      document.querySelector('.selectionContainer').classList.remove('fixBorder');
  }

  render() {
    return (

      <div className="container">
        <div className="groupHead">
          <p className="countries">
            Australia, Austria, Bahrain, Belgium, Canada, Czech Republic, Denmark, Finland, France, Germany, Hong Kong, Ireland, Israel, Italy, Jordan, Kuwait, Lebanon, Luxembourg, Netherlands, New Zealand, Norway, Oman, Qatar, Saudi Arabia, South Africa, Spain, Sweden, Switzerland, United Arab Emirates, United Kingdom
          </p>
        </div>
        <div className="left">
          <p>
            Dexcom Follow App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/follow-app.png" alt="Follow App" />
        </div>
        <div className="right">

          <p className="insideText">
            <i className="fab fa-android"></i>
            <strong> Android</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong>Android versions:</strong>
            </li>
            <li className="insideText">
              6.0.0, 6.0.1, 7.0.0, 7.1.2, 8.0.0, 8.1.0
            </li>
            <li className="insideText">
              <strong>Google Pixel:</strong>
            </li>
            <li className="insideText">
              Pixel
            </li>
            <li className="insideText">
              <strong>Huawei:</strong>
            </li>
            <li className="insideText">
              P20(Android 8.1.0), P20 Pro(Android 8.1.0)
            </li>
            <li className="insideText">
              <strong>LG:</strong>
            </li>
            <li className="insideText">
              G5, G6
            </li>
            <li className="insideText">
              <strong>Samsung:</strong>
            </li>
            <li className="insideText">
              Galaxy J3 [models SM-J330 and SM-J337], Galaxy S5, Galaxy S6, Galaxy S7 Edge, A5 [SM-A520 Model Only](7.0.0)
            </li>
          </ul>

          <p className="insideText">
            <i className="fab fa-apple"></i>
            <strong> Apple</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong>iPhone:</strong>
            </li>
            <li className="insideText">
              5, 5C, 5S, 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, SE, 8, 8 Plus, X, XS, XS Max, XR
            </li>
            <li className="insideText">
              <strong>iPad:</strong>
            </li>
            <li className="insideText">
              4, 5, Air, Air 2, Mini 2, Mini 3, Mini 4, Pro, iPad (6th Generation)
            </li>
            <li className="insideText">
              <strong>iPod:</strong>
            </li>
            <li className="insideText">
              iPod touch 6th Gen
            </li>

            <li className="insideText">
              <strong>iOS versions:</strong>
            </li>
            <li className="insideText">
              10.0.1, 10.0.2, 10.0.3, 10.1.0, 10.1.1, 10.2.0, 10.2.1, 10.3.0, 10.3.1, 10.3.2, 10.3.3, 11.0.0, 11.0.1, 11.0.2, 11.0.3, 11.1.0, 11.1.1, 11.1.2, 11.2.0, 11.2.1, 11.2.2, 11.2.5, 11.2.6, 11.3.0, 11.3.1, 11.4.0, 11.4.1, 12.0.0, 12.0.1, 12.1.0, 12.1.1, 12.1.2, 12.1.3, 12.1.4
            </li>
          </ul>
        </div>

        <div className="partition"></div>

        <div className="groupHead korea">
          <p className="countries">
            South Korea - Android ONLY <i className="fab fa-android noBold"></i>
          </p>
        </div>
        <div className="left korea">
          <p>
            Dexcom Follow App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/follow-app.png" alt="Follow App" />
        </div>
        <div className="right koreaRight">
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong>Android versions:</strong>
            </li>
            <li className="insideText">
              6.0.0, 6.0.1, 7.0.0, 7.1.2, 8.0.0, 8.1.0
            </li>
            <li className="insideText">
              <strong>Google Pixel:</strong>
            </li>
            <li className="insideText">
              Pixel
            </li>
            <li className="insideText">
              <strong>Huawei:</strong>
            </li>
            <li className="insideText">
              P20(Android 8.1.0), P20 Pro(Android 8.1.0)
            </li>
            <li className="insideText">
              <strong>LG:</strong>
            </li>
            <li className="insideText">
              G5 , G6
            </li>
            <li className="insideText">
              <strong>Samsung:</strong>
            </li>
            <li className="insideText">
              Galaxy J3 [models SM-J327, SM-J330 and SM-J337], Galaxy S5, Galaxy S6, Galaxy S7 Edge, A5 [SM-A520 Model Only](7.0.0)
            </li>
          </ul>
        </div>

        <div className="partition"></div>

      </div>

    );
  }
}

export default Follow;
