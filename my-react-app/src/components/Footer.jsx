/**
 * Footer Component
 * Displays copyright information with current year
 * Provides branding and attribution for the application
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Crypto Tracker. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
