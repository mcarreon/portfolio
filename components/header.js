import Nav from './nav';
import Head from 'next/head';


const Header = () => (
  <div className="header">
    <Head>
      <title>Marlo Carreon</title>
      <link href="https://fonts.googleapis.com/css?family=Muli:400,600|Ovo&display=swap" rel="stylesheet"></link>
    </Head>
    <Nav />
    <div className="header--body container mt-5">
      <div>
        <h1>Marlo Carreon</h1>
        <p>Full-Stack Developer <br/> in <span className="alt-color">Los Angeles</span></p>
      </div>
      <div>
        <img src="../static/losangeles.jpg"/>
      </div>
    </div>
  </div>
);


export default Header;