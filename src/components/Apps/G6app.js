import React, { Component }  from 'react';
import '../../style/appsStyle.css';
import ARIA from '../../languages/ARIA.json';
import languages from '../../languages/languages.json';

class G6app extends Component {

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
    const { watchMessage,wearVersions, watchVersions, iOSVersions } = currentLang;
    const currentARIA = ARIA[this.props.id];
    const { devices, watches } = currentARIA;

    return (

      <div className="container">

        <section className="groupHead">
          <h3 tabIndex="-1" className="countriesTopHeader">Availability by country:</h3>
          <p className="countries">
            Austria, Denmark, Finland, Germany, Ireland, Italy, Netherlands, Norway, South Africa, Spain, Sweden, Switzerland and United Kingdom
          </p>
        </section>

        <aside className="left" aria-hidden="true">
          <p>
            Dexcom G6 App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/g6-app.png" alt="G6 App" />
        </aside>

        <article className="right">

          <ul>
            <li>
              <h3 className="insideText">
                <i className="fab fa-android noBold"></i> Android
              </h3>
              <ul>
                <h4>
                  <i className="fas fa-mobile-alt"></i> { devices }
                </h4>
                <li className="insideText">
                  <h5>Google</h5>
                  <p>
                    Pixel (Android 7.1.2, 8.0.0, 8.1.0), Pixel XL (Android 8.0.0, 8.1.0), Pixel 2 XL (Android 8.0.0, 8.1.0), Pixel 3, Pixel 3 XL
                  </p>
                </li>
                <li className="insideText">
                  <h5>Huawei</h5>
                  <p>P20 (Android 8.1.0), P20 Pro (Android 8.1.0)</p>
                </li>
                <li className="insideText">
                  <h5>LG</h5>
                  <p>G5 (Android 7.0.0), G6 (Android 7.0.0), G7 (ThinQ) (Android 8.0.0)</p>
                </li>
                <li className="insideText">
                  <h5>Samsung</h5>
                  <p>
                    Galaxy S5 (Android 6.0.1), Galaxy S6 (Android 7.0.0), Galaxy S6 Edge (Android 7.0.0), Galaxy S7 (Android 7.0.0), Galaxy S7 Edge (Android 7.0.0), Galaxy S8 (Android 7.0.0), Galaxy S8 Plus (Android 7.0.0), Galaxy S9 (Android 8.0.0), Galaxy S9 Plus (Android 8.0.0), Galaxy Note 8 (Android 7.1.1), Galaxy Note 9 (Android 8.1.0), Excludes Samsung “Active” models, A5 [SM-A520 Model Only] (7.0.0)
                  </p>
                </li>
              </ul>
              <ul>
                <h4>
                  <i className="far fa-clock"></i> { watches }
                </h4>
                <li className="insideText">
                  <h5>Android Wear Watches:</h5>
                  <p>{ watchMessage }</p>
                </li>
                <li className="insideText">
                  <h5>{ wearVersions }:</h5>
                  <p>1.3.0, 1.4.0, 1.5.0, 2.0.0, 2.6.0, 2.7.0, 2.8.0, 2.9.0</p>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="insideText">
                <i className="fab fa-apple noBold"></i> Apple
              </h3>
              <ul>
                <h4>
                  <i className="fas fa-mobile-alt"></i> { devices }
                </h4>
                <li className="insideText">
                  <h5>iPhone:</h5>
                  <p>5S, 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, SE, 8, 8 Plus, X, XS, XS Max, XR</p>
                </li>
                <li className="insideText">
                  <h5>{ iOSVersions }:</h5>
                  <p>
                    10.3.2, 10.3.3, 11.0.0, 11.0.1, 11.0.2, 11.0.3, 11.1.0, 11.1.1, 11.2.0, 11.2.1, 11.2.2, 11.2.5, 11.2.6, 11.3.1, 11.4.0, 11.4.1, 12.0.0, 12.0.1, 12.1.0, 12.1.1, 12.1.2, 12.1.3, 12.1.4
                  </p>
                </li>
                <li className="insideText">
                  <h5>iPod:</h5>
                  <p>iPod touch 6th Generation</p>
                </li>
              </ul>
              <ul>
                <h4>
                  <i className="far fa-clock"></i> { watches }
                </h4>
                <li className="insideText">
                  <h5>Apple Watch:</h5>
                  <p>
                    1st Generation, Series 1, Series 2, Series 3, Series 4
                  </p>
                  <p>{ watchMessage }</p>
                </li>
                <li className="insideText">
                  <h5>{ watchVersions }:</h5>
                  <p>
                    3.0.0, 3.1.0, 3.1.3, 3.2.0, 3.2.2, 3.2.3, 4.0.0, 4.1.0, 4.2.0, 4.2.2, 4.2.3, 5.0.0, 5.0.1, 5.1.0, 5.1.1, 5.1.2, 5.1.3
                  </p>
                </li>
              </ul>

            </li>
          </ul>

        </article>

        <div className="partition" aria-hidden="true" />

      </div>

    );
  }
}

export default G6app;
