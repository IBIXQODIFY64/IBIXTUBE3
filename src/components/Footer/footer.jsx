import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">IBIXTube</h2>

        <p className="footer-text">
          Get the latest updates on new movies and web series.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} IBIXTube. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
