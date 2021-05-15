import React from 'react';
import styles from './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Footer">
        <h2>Source Code</h2>
        <span className="Footer"><a href='https://github.com/alexroussos/puzzle-ui'>Puzzle UI</a> React app (GitHub)</span>
        <span className="Footer"><a href='https://github.com/alexroussos/letter-boxed'>Letter Boxed</a> Python script (GitHub)</span>
        <span className="Footer">By <a href="mailto:alexroussos@gmail.com?Subject=Mosaic Generator" target="_top">Alex Roussos, 2021</a></span>
      </div>
    );
  }
}

export default Footer;