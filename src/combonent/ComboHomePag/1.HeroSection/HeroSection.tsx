import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <span className={styles.badge}>See what's new in 3.2 →</span>
                <h1>Secure and modern Minecraft Launcher</h1>
                <p>
                    The simplicity and elegance of our launcher will make it easy for you to find 
                    your way around. In addition high speed and lightweight guaranteed, lack of 
                    built-in ads and, above all, full security.
                </p>
                <div className={styles.heroActions}>
                    <button className={styles.btnGetStarted}>Get started</button>
                    <button className={styles.btnDownload}>Download</button>
                </div>
                <small>Supported on Windows, Linux, and macOS</small>
            </div>
            
            <div className={styles.heroPreview}>
                <img src="/launcher-preview.svg" alt="Launcher Preview" />
            </div>
        </section>
    );
}