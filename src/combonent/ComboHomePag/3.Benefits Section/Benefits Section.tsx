import styles from './Benefits Section.module.css';
import { FaPalette, FaDiscord, FaShieldAlt } from 'react-icons/fa';

export default function BenefitsSection() {
    const features = [
        { title: "Easy skin and cape management", desc: "Manage your in-game look...", icon: <FaPalette size={30} /> },
        { title: "Vibrant community on Discord", desc: "Our server is the ultimate hub...", icon: <FaDiscord size={30} /> },
        { title: "Built on a foundation of integrity", desc: "We prioritize safety to ensure...", icon: <FaShieldAlt size={30} /> }
    ];

    return (
        <section className={styles.benefitsSection}>
            <div className={styles.benefitsGrid}>
                {features.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${styles.benefitCard} ${index === 2 ? styles.fullWidth : ''}`}
                    >
                        <div className={styles.iconContainer}>{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <button className={styles.exploreBtn}>
                            Explore {item.title.split(' ')[0]} →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}