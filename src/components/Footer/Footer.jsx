import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© 2025 InsightLedger - All Rights Reserved.</p>
        <div>
          <Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
