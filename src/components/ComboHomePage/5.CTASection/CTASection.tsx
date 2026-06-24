import styles from './CTASection.module.css';

export const CTASection5: React.FC = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
                <div className={styles.ctaLogo}>
                    <div className={styles.cubeIcon}></div> 
                </div>
                <h2>Start using <span className={styles.highlight}>sklauncher</span> today</h2>
                <p>Always reliable and safe.</p>
                
                <div className={styles.ctaButtons}>
                    <button className={styles.btnPrimary}>Register now →</button>
                    <button className={styles.btnSecondary}>Download ↓</button>
                </div>
            </div>
        </section>
    );
};