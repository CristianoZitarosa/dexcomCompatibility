import React, { Component }  from 'react';
import '../style/About.css';

class About extends Component {

  componentDidMount() {
    this.switchMessage();
    /* Imposta quale contenuto mostrare in base alla lingua quando è montato il componente */
    this.props.existsElem(localStorage.language) ? this.props.fillAboutPage(localStorage.language) : this.props.fillAboutPage(this.props.id);
  }

  componentWillUnmount() {
    this.switchMessage();
  }

/**
* Appena il comp è montato, con questa funzione cambia il messaggio nella barra
* indicando di scegliere un'app se in home, o informazioni se about
**/
  switchMessage = () => {
    const homeMessage = document.querySelector('.homeMessage');
    const aboutMessage = document.querySelector('.aboutMessage');
    aboutMessage.classList.toggle('hide');
    homeMessage.classList.toggle('hide');
  }

  render() {

    return (
      <div id="aboutMessage"></div>
    );

  }
}

export default About;
