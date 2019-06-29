import React, { Component }  from 'react';
import '../../style/appsStyle.css';
import ARIA from '../../languages/ARIA.json';
import languages from '../../languages/languages.json';

class Clarity extends Component {

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
    const { compatibilityAndroidMessage, compatibilityIOSMessage } = currentLang;
    const currentARIA = ARIA[this.props.id];
    const { devices } = currentARIA;

    return (

      <div className="container">

        <section className="groupHead">
          <h3 tabIndex="-1" className="countriesTopHeader">Availability by country:</h3>
          <p className="countries">
            Australia, Austria, Bahrain, Belgium, Czech Republic, Denmark, Finland, France, Germany, Hong Kong, Ireland, Israel, Italy, Jordan, Kuwait, Lebanon, Luxembourg, Netherlands, New Zealand, Norway, Oman, Poland, Qatar, Saudi Arabia, South Africa, South Korea, Spain, Sweden, Switzerland, UAE, United Kingdom
          </p>
        </section>

        <aside className="left" aria-hidden="true">
          <p>
            Dexcom CLARITY App
          </p>
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/clarity.jpg" alt="Clarity App"/>
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
                  <p>{ compatibilityAndroidMessage }</p>
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
                  <p>iPhone, iPad, and iPad touch</p>
                  <p>{ compatibilityIOSMessage }</p>
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

export default Clarity;
