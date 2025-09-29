import {Link} from "react-router"


const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Links</li>
        <li>copyright</li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </div>
  );
};

export default Footer;
