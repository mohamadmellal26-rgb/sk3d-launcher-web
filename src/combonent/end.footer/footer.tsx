import './footer.css';
import { FaTwitter, FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaCheckCircle } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* الجزء الأول: البراند والأيقونات وحالة السيرفر */}
                <div className="footer-brand">
                    <h3 className="brand-name">SK3D</h3>
                    <div className="social-icons">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTiktok /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                    <div className="status-badge">
                        <FaCheckCircle className="status-icon" /> All services are online
                    </div>
                </div>
                
                {/* الأعمدة */}
                <div className="footer-links">
                    <h4>Launcher</h4>
                    <a href="#">Downloads</a>
                    <a href="#">Support</a>
                    <a href="#">Blog</a>
                    <a href="#">Sign in</a>
                    <a href="#">Get started</a>
                </div>

                <div className="footer-links">
                    <h4>Useful links</h4>
                    <a href="#">Skins</a>
                    <a href="#">Capes</a>
                    <a href="#">Server list</a>
                    <a href="#">Security</a>
                    <a href="#">FAQ</a>
                    <a href="#">Discord</a>
                </div>

                <div className="footer-links">
                    <h4>Information</h4>
                    <a href="#">Minecraft changelogs</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;