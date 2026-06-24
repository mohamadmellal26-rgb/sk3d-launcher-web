import { useState } from 'react';
import styles from './Header.module.css';
import { LuDownload, LuServer, LuPalette, LuShield, LuFileText, LuDoorOpen, LuMenu, LuX } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Downloads', icon: <LuDownload />, path: '/download' },
    { name: 'Server list', icon: <LuServer />, path: '#' },
    { name: 'Skins', icon: <LuPalette />, path: '#' },
    { name: 'Capes', icon: <LuShield />, path: '/Capes' },
    { name: 'Blog', icon: <LuFileText />, path: '#' },
  ];

  return (
    <header className={styles.siteHeader}>
      <div className={styles.topBanner}>Your ultimate Minecraft hub is here!</div>
      
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <h1>
            <Link to="/" className={styles.logo}>SK<span className={styles.greenText}>3D</span></Link>
          </h1>
          
          {/* أيقونة المنيو */}
          <button className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <LuX /> : <LuMenu />}
          </button>
          
          {/* قائمة الروابط */}
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className={styles.signIn}>Sign in <LuDoorOpen /></button>
        </div>
      </nav>
    </header>
  );
}