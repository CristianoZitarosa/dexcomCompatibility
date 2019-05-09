import React, { Component }  from 'react';
import '../style/appsStyle.css';

class G5app extends Component {

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
            Australia, Austria, Bahrain, Belgium, Canada, Czech Republic, Denmark, Finland, France, Germany, Hong Kong, Ireland, Israel, Italy, Jordan, Kuwait, Lebanon, Luxembourg, Netherlands, New Zealand, Norway, Oman, Qatar, Saudi Arabia, South Africa, Spain, Sweden, Switzerland, United Arab Emirates, United Kingdom
          </p>
        </div>
        <div className="left">
          <p>
            Dexcom G5 App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/Mobile_Icon.png" alt="G5 App" />
        </div>
        <div className="right">

          <p className="insideText">
            <i className="fab fa-android"></i>
            <strong> Android</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong>Google Pixel:</strong>
            </li>
            <li className="insideText">
              Pixel (Android 7.1.2, 8.0.0, 8.1.0), Pixel 2 (Android 8.0.0, 8.1.0), Pixel XL (Android 8.0.0, 8.1.0), Pixel 2 XL (Android 8.0.0, 8.1.0), Pixel 3, Pixel 3 XL
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
              G4 (Android 5.0.0, 5.1.0, 5.1.1, 6.0.0), G5 (Android 6.0.1, 7.0.0), G6 (Android 7.0.0), G7 (ThinQ) (Android 8.0.0)
            </li>
            <li className="insideText">
              <strong>Samsung:</strong>
            </li>
            <li className="insideText">
              Galaxy S5 (Android 6.0.0, 6.0.1), Galaxy S6 (Android 6.0.1, 7.0.0), Galaxy S6 Edge (Android 5.1.1, 6.0.0, 6.0.1), Galaxy S7 (Android 6.0.1, 7.0.0), Galaxy S7 Edge (Android 6.0.1, 7.0.0 ), Galaxy S8 (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S8 Plus (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S9 (Android 8.0.0), Galaxy S9 Plus (Android 8.0.0), Galaxy Note 5 (Android 6.0.0, 6.0.1, 7.0.0), Galaxy Note 8 (Android 7.1.1, 8.0.0), Galaxy Note 9 (Android 8.1.0), Galaxy J3 [Models SM-J237, SM-J330 and SM-J337] (6.0.1, 7.0.0, 8.0.0), A5 [SM-A520 Model Only](7.0.0)
            </li>
            <li><i className="far fa-clock"></i></li>
            <li className="insideText">
              <strong>Android Wear Watches:</strong>
            </li>
            <li className="insideText">
              Watches require compatible smart device to use app
            </li>
            <li className="insideText">
              <strong>Wear OS versions:</strong>
            </li>
            <li className="insideText">
              1.3.0, 1.4.0, 1.5.0, 2.0.0
            </li>
          </ul>

          <p className="insideText">
            <i className="fab fa-apple"></i>
            <strong> Apple</strong>
          </p>
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong> iPhone:</strong>
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
            <li><i className="far fa-clock"></i></li>
            <li className="insideText">
              <strong>Apple Watch:</strong>
            </li>
            <li className="insideText">
              1st Generation, Series 1, Series 2, Series 3 (watches require compatible smart device to use app)
            </li>
            <li className="insideText">
              <strong>watchOS versions:</strong>
            </li>
            <li className="insideText">
              3.0.0, 3.1.0, 3.1.3, 3.2.0, 3.2.2, 4.0.0, 4.1.0, 4.2.0, 4.2.3, 4.3.0, 4.3.1, 4.3.2, 5.0.0, 5.0.1, 5.1.0, 5.1.1, 5.1.2, 5.1.3
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
            Dexcom G5 Mobile App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/Mobile_Icon.png" alt="G5 App" />
        </div>
        <div className="right koreaRight">
          <ul>
            <li><i className="fas fa-mobile-alt"></i></li>
            <li className="insideText">
              <strong>Google Pixel:</strong>
            </li>
            <li className="insideText">
              Pixel (Android 7.1.2, 8.0.0, 8.1.0), Pixel 2 (Android 8.0.0, 8.1.0), Pixel XL (Android 8.0.0, 8.1.0), Pixel 2 XL (Android 8.0.0, 8.1.0), Pixel 3, Pixel 3 XL
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
              G5 (Android 6.0.1, 7.0.0), G6 (Android 7.0.0), G7 (ThinQ) (Android 8.0.0)
            </li>
            <li className="insideText">
              <strong>Samsung:</strong>
            </li>
            <li className="insideText">
              Galaxy S5 (Android 6.0.0, 6.0.1), Galaxy S6 (Android 6.0.1, 7.0.0), Galaxy S6 Edge (Android 5.1.1, 6.0.0, 6.0.1), Galaxy S7 (Android 6.0.1, 7.0.0), Galaxy S7 Edge (Android 6.0.1, 7.0.0 ), Galaxy S8 (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S8 Plus (Android 7.0.0, 8.0.0), Galaxy S9 (Android 8.0.0), Galaxy S9 Plus (Android 8.0.0), Galaxy Note 5 (Android 6.0.1, 7.0.0), Galaxy Note 8 (Android 7.1.1, 8.0.0), Galaxy Note 9 (Android 8.1.0), Galaxy J3 [Models SM-J237, SM-J330 and SM-J337] (6.01, 7.0.0, 8.0.0), A5 [SM-A520 Model Only](7.0.0)
            </li>
            <li><i className="far fa-clock"></i></li>
            <li className="insideText">
              <strong>Android Wear Watches:</strong>
            </li>
            <li className="insideText">
              Watches require compatible smart device to use app
            </li>
            <li className="insideText">
              <strong>Wear OS versions:</strong>
            </li>
            <li className="insideText">
              1.3.0, 1.4.0, 1.5.0, 2.0.0
            </li>
          </ul>
        </div>

        <div className="partition"></div>

      </div>

    );
  }
}

export default G5app;
