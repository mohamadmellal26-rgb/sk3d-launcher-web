import styles from './SoftwareUpdatesSection.module.css';
import { FaArrowRight, FaFire } from 'react-icons/fa';

const SoftwareUpdatesSection = () => {
    const urlImg = 'https://skmedix.pl/images/121.webp';
    
    return (
        <section className={styles.updateSection}>
            <div className={styles.updateContainer}>
                {/* الجزء النصي */}
                <div className={styles.updateContent}>
                    <div className={styles.badge}>
                        <span><FaFire /> Minecraft version 1.21.11 is available in SK3D!</span>
                    </div>
                    <h2>The latest version of Minecraft is always waiting for you in SK3D</h2>
                    <p>
                        Instantly jump into the new version of the game. SKLauncher adds new 
                        Minecraft versions almost as soon as they are released. Latest releases, 
                        snapshots and older versions of the game are available. Choose the one 
                        that interests you and start playing.
                    </p>
                    <a href="#" className={styles.linkButton}>
                        Read the latest Minecraft version change log <FaArrowRight size={14} />
                    </a>
                </div>
                
                {/* جزء الصورة */}
                <div className={styles.updateImage}>
                     <img src={urlImg} alt="Minecraft gameplay screenshot" />
                </div>
            </div>
        </section>
    );
};

export default SoftwareUpdatesSection;