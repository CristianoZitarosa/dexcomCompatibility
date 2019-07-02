import React, { Component }  from 'react';
import '../../style/appsStyle.css';
import ARIA from '../../languages/ARIA.json';
import languages from '../../languages/languages.json';

class G5app extends Component {

  componentDidMount() {
    /* focus su elemento pagina */
    document.querySelector('.countriesTopHeader').focus();
    /* toglie border radius */
    document.querySelector('.selectionContainer').classList.add('fixBorder');
  }

  componentWillUnmount() {
    /* rimette border radius (controlla prima esistenza elemento)  */
    if (document.querySelector('.selectionContainer'))
      document.querySelector('.selectionContainer').classList.remove('fixBorder');
  }

  render() {
    /**
    * Semplificazioni codice
    **/
    const currentLang = languages[this.props.id];
    const { watchMessage, wearVersions, watchVersions, iOSVersions } = currentLang;
    const currentARIA = ARIA[this.props.id];
    const { devices, watches, availableCountries, korAndroidIndication } = currentARIA;

    return (

      <div className="container">

        <section className="groupHead">
          <h3 tabIndex="-1" className="countriesTopHeader">{ availableCountries }:</h3>
          <p className="countries">
            Australia, Austria, Bahrain, Belgium, Canada, Czech Republic, Denmark, Finland, France, Germany, Hong Kong, Ireland, Israel, Italy, Jordan, Kuwait, Lebanon, Luxembourg, Netherlands, New Zealand, Norway, Oman, Qatar, Saudi Arabia, South Africa, Spain, Sweden, Switzerland, United Arab Emirates, United Kingdom
          </p>
        </section>

        <aside className="left" aria-hidden="true">
          <p>
            Dexcom G5 App
          </p>
          <img width="75" height="75" src="./images/g5.png" alt="G5 App" />
        </aside>

        <article className="right">

          <ul>
            <li>
              <h3 className="insideText">
                <i className="fab fa-android noBold"></i> Android
              </h3>
              <section>
                <h4>
                  <i className="fas fa-mobile-alt"></i> { devices }
                </h4>
                <ul>
                  <li className="insideText">
                    <h5>Google Pixel:</h5>
                    <p>
                      Pixel (Android 7.1.2, 8.0.0, 8.1.0), Pixel XL (Android 8.0.0, 8.1.0), Pixel 2 (Android 8.0.0, 8.1.0), Pixel 2 XL (Android 8.0.0, 8.1.0), Pixel 3, Pixel 3 XL
                    </p>
                  </li>
                  <li className="insideText">
                    <h5>Huawei:</h5>
                    <p>P20 (Android 8.1.0), P20 Pro (Android 8.1.0)</p>
                  </li>
                  <li className="insideText">
                    <h5>LG:</h5>
                    <p>
                      G4 (Android 5.0.0, 5.1.0, 5.1.1, 6.0.0), G5 (Android 6.0.1, 7.0.0), G6 (Android 7.0.0), G7 (ThinQ) (Android 8.0.0)
                    </p>
                  </li>
                  <li className="insideText">
                    <h5>Samsung:</h5>
                    <p>
                      Galaxy S5 (Android 6.0.0, 6.0.1), Galaxy S6 (Android 6.0.1, 7.0.0), Galaxy S6 Edge (Android 5.1.1, 6.0.0, 6.0.1), Galaxy S7 (Android 6.0.1, 7.0.0), Galaxy S7 Edge (Android 6.0.1, 7.0.0 ), Galaxy S8 (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S8 Plus (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S9 (Android 8.0.0), Galaxy S9 Plus (Android 8.0.0), Galaxy Note 5 (Android 6.0.0, 6.0.1, 7.0.0), Galaxy Note 8 (Android 7.1.1, 8.0.0), Galaxy Note 9 (Android 8.1.0), Galaxy J3 [Models SM-J237, SM-J330 and SM-J337] (6.0.1, 7.0.0, 8.0.0), A5 [SM-A520 Model Only] (7.0.0)
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h4>
                  <i className="far fa-clock"></i> { watches }
                </h4>
                <ul>
                  <li className="insideText">
                    <h5>Android Wear Watches:</h5>
                    <p>{ watchMessage }</p>
                  </li>
                  <li className="insideText">
                    <h5>{ wearVersions }:</h5>
                    <p>1.3.0, 1.4.0, 1.5.0, 2.0.0</p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <h3 className="insideText">
                <i className="fab fa-apple noBold"></i> Apple
              </h3>
              <section>
                <h4>
                  <i className="fas fa-mobile-alt"></i> { devices }
                </h4>
                <ul>
                  <li className="insideText">
                    <h5>iPhone:</h5>
                    <p>5, 5C, 5S, 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, SE, 8, 8 Plus, X, XS, XS Max, XR</p>
                  </li>
                  <li className="insideText">
                    <h5>iPad:</h5>
                    <p>4, 5, Air, Air 2, Mini 2, Mini 3, Mini 4, Pro, iPad (6th Generation)</p>
                  </li>
                  <li className="insideText">
                    <h5>iPod:</h5>
                    <p>iPod touch 6th Generation</p>
                  </li>
                  <li className="insideText">
                    <h5>{ iOSVersions }:</h5>
                    <p>
                      10.0.1, 10.0.2, 10.0.3, 10.1.0, 10.1.1, 10.2.0, 10.2.1, 10.3.0, 10.3.1, 10.3.2, 10.3.3, 11.0.0, 11.0.1, 11.0.2, 11.0.3, 11.1.0, 11.1.1, 11.1.2, 11.2.0, 11.2.1, 11.2.2, 11.2.5, 11.2.6, 11.3.0, 11.3.1, 11.4.0, 11.4.1, 12.0.0, 12.0.1, 12.1.0, 12.1.1, 12.1.2, 12.1.3, 12.1.4
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h4>
                  <i className="far fa-clock"></i> { watches }
                </h4>
                <ul>
                  <li className="insideText">
                    <h4>Apple Watch:</h4>
                    <p>
                      1st Generation, Series 1, Series 2, Series 3
                    </p>
                    <p>{ watchMessage }</p>
                  </li>
                  <li className="insideText">
                    <h4>{ watchVersions }:</h4>
                    <p>
                      3.0.0, 3.1.0, 3.1.3, 3.2.0, 3.2.2, 4.0.0, 4.1.0, 4.2.0, 4.2.3, 4.3.0, 4.3.1, 4.3.2, 5.0.0, 5.0.1, 5.1.0, 5.1.1, 5.1.2, 5.1.3
                    </p>
                  </li>
                </ul>
              </section>
            </li>
          </ul>

        </article>

        <div className="partition" aria-hidden="true" />

        <section className="groupHead korea">
          <h3 className="countriesTopHeader">{ availableCountries }:</h3>
          <p className="countries">
            { korAndroidIndication } <i className="fab fa-android noBold"></i>
          </p>
        </section>

        <aside className="left korea" aria-hidden="true">
          <p>
            Dexcom G5
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/Mobile_Icon.png" alt="G5 App" />
        </aside>

        <article className="right koreaRight">

          <ul>
            <li>
              <section>
                <h4>
                  <i className="fas fa-mobile-alt"></i> { devices }
                </h4>
                <ul>
                  <li className="insideText">
                    <h5>Google Pixel:</h5>
                    <p>
                      Pixel (Android 7.1.2, 8.0.0, 8.1.0), Pixel XL (Android 8.0.0, 8.1.0), Pixel 2 (Android 8.0.0, 8.1.0), Pixel 2 XL (Android 8.0.0, 8.1.0), Pixel 3, Pixel 3 XL
                    </p>
                  </li>
                  <li className="insideText">
                    <h5>Huawei:</h5>
                    <p>P20(Android 8.1.0), P20 Pro(Android 8.1.0)</p>
                  </li>
                  <li className="insideText">
                    <h5>LG:</h5>
                    <p>
                      G5 (Android 6.0.1, 7.0.0), G6 (Android 7.0.0), G7 (ThinQ) (Android 8.0.0)
                    </p>
                  </li>
                  <li className="insideText">
                    <h5>Samsung:</h5>
                    <p>
                      Galaxy S5 (Android 6.0.0, 6.0.1), Galaxy S6 (Android 6.0.1, 7.0.0), Galaxy S6 Edge (Android 5.1.1, 6.0.0, 6.0.1), Galaxy S7 (Android 6.0.1, 7.0.0), Galaxy S7 Edge (Android 6.0.1, 7.0.0 ), Galaxy S8 (Android 7.0.0, 7.1.1, 8.0.0), Galaxy S8 Plus (Android 7.0.0, 8.0.0), Galaxy S9 (Android 8.0.0), Galaxy S9 Plus (Android 8.0.0), Galaxy Note 5 (Android 6.0.1, 7.0.0), Galaxy Note 8 (Android 7.1.1, 8.0.0), Galaxy Note 9 (Android 8.1.0), Galaxy J3 [Models SM-J237, SM-J330 and SM-J337] (6.01, 7.0.0, 8.0.0), A5 [SM-A520 Model Only](7.0.0)
                    </p>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <section>
                <h4>
                  <i className="far fa-clock"></i> { watches }
                </h4>
                <ul>
                  <li className="insideText">
                    <h5>Android Wear Watches:</h5>
                    <p>Watches require a compatible smart device to use the app</p>
                  </li>
                  <li className="insideText">
                    <h5>Wear OS versions:</h5>
                    <p>1.3.0, 1.4.0, 1.5.0, 2.0.0</p>
                  </li>
                </ul>
              </section>
            </li>
          </ul>

        </article>

        <div className="partition" aria-hidden="true" />

      </div>

    );
  }
}

export default G5app;
