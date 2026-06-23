import styles from './Header.module.css';
import { LuDownload, LuServer, LuPalette, LuShield, LuFileText, LuDoorOpen } from "react-icons/lu";

export default function Header() {
  const navItems = [
    { name: 'Downloads', icon: <LuDownload />, path: '/download' },
    { name: 'Server list', icon: <LuServer />, path: '#' },
    { name: 'Skins', icon: <LuPalette />, path: '#' },
    { name: 'Capes', icon: <LuShield />, path: '/Capes' },
    { name: 'Blog', icon: <LuFileText />, path: '#' },
  ];

  return (
    <header className={styles.siteHeader}>
      <div className={styles.topBanner}>
        Your ultimate Minecraft hub is here!
      </div>

      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <h1>
            <a href="/">SK3D</a>
          </h1>
          
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.path}>
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button className={styles.signIn}>
            Sign in <LuDoorOpen />
          </button>
        </div>
      </nav>
    </header>
  );
}