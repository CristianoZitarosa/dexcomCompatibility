import React, { Component }  from 'react';
import '../style/About.css';

class About extends Component {

  componentDidMount() {
    document.getElementById('selectionText').innerText='About this page:';
  }

  componentWillUnmount() {
    document.getElementById('selectionText').innerText='Select an App:';
  }

  render() {

    return (
      <div id="aboutMessage">
        <p><strong>This is an Unofficial page!</strong></p>
        <p>Dexcom is the owner of the brand, images of the Apps, style of the page, and the administrator of <strong>the original page</strong> you can reach <a href="https://www.dexcom.com/dexcom-international-compatibility" target="_blank" rel="noopener noreferrer"><strong>by this link</strong></a>.</p>
        <p>The style of this page is as much possible similar to the original page only to avoid that users can feel lost due a different graphic element.</p>
        <p>This page is made from a Dexcom User to help Dexcom users.</p>
        <p>The purpose is to provide an easier consultation of supported devices by original Dexcom Apps since the original page could currently be difficult to read to some users.</p>
        <p>Due the fact this page is not mantained by Dexcom <strong>it is not possible to guarantee rapid updates or accuracy on provided data</strong>.</p>
        <p>So enjoy this page as a visual improvement but <strong>please</strong> for any doubt or question <strong>refer to Dexcom</strong>.</p>
      </div>
    );

  }
}

export default About;
