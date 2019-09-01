import Nav from './nav';
import MobileNav from './mobileNav';
import Head from 'next/head';


const Header = () => (
  <div className="header">
    <Head>
    <title>Marlo Carreon</title>
    </Head>
    <Nav />
    <MobileNav />
    <div className="header--body container mt-5">
      <div>
        <h1>Marlo Carreon</h1>
        <p>Full-Stack Developer <br/> in <span className="alt-color">Los Angeles</span></p>
      </div>
      <div>
        <div>
          <img src="../static/losangeles.jpg" alt="LA Skyline"/>
        </div>
      </div>
    </div>
  </div>
);


export default Header;