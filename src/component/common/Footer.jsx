const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>Email: support@grandmounthotel.com</p>
                    <p>Phone: +94 71 124 6786</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Grand Mount Hotel | All Rights Reserved &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
