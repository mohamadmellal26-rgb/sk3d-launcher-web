import styles from './Split Layout.module.css';

export default function SplitLayout() {
    return (
        <section className={styles.splitHero}>
            <div className={styles.heroText}>
                <h1>Secure and modern Minecraft Launcher</h1>
                <p>Simple, elegant, and secure.</p>
            </div>
            
            <div className={styles.heroVisuals}>
                <div className={styles.cardElement}>
                    <h3>Modpack installation</h3>
                </div>
            </div>
        </section>
    );
}