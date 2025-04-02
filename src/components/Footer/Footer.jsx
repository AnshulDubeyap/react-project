import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2023 EventSphere. All rights reserved.
        </p>
      </div>
      <div className="contact">
        <p className="contact-text">Connect with us</p>
        <div className="contact-icons">
          <img src="/assets/icons/youtube_icon.png" className="contact-icon" />
          <img src="/assets/icons/facebook-5221.svg" className="contact-icon" />
          <img
            src="/assets/icons/google_mail_gmail_logo_icon_159346.svg"
            className="contact-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
