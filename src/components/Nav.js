import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import languages from '../languages/languages.json';

class Nav extends Component {

  render() {

    const setLan = this.props.setLan;
    const currentLang = languages[this.props.id];
    const { aboutBtn } = currentLang;

    return (
      <div className="btn-group">

        <Link to="/"> {/* bottone home */}
          <button className="button btn-left">
            <i className="fas fa-home"></i> Home
          </button>
        </Link>

        <Link to="/about">{/* bottone about */}
          <button className="button"><i className="fas fa-info-circle"></i> { aboutBtn }</button>
        </Link>

        {/* bottone lingua */}
        <button className="button btn-right" ><i className="fas fa-language"></i> Language
          <div className="test">
            {/* Devono essere tag <option> per usare attributo <value>
            su altri tag non funzionerebbe restituendo undefined
            nello storage  facendo crashare l'applicazione*/}
            <option onClick={ setLan } value='0'>English</option>
            <option onClick={ setLan } value='1'>Italiano</option>
          </div>
        </button>

        {/* <button className="button">
          <select id='tete' onChange={this.props.setLan}>
            <option value='0'>English</option>
            <option value='1'>Italiano</option>
          </select></button> */}

      </div>
    );

  }
}

export default Nav;
