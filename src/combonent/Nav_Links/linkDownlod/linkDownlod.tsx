import { useState } from 'react';
import styles from './linkDownlod.module.css';
import { FaRocket } from 'react-icons/fa';

function DownloadPage() {
    const [platform, setPlatform] = useState('windows');

    const platforms = [
        { id: 'windows', label: 'Windows', ext: 'exe' },
        { id: 'macos', label: 'macOS', ext: 'dmg' },
        { id: 'linux', label: 'Linux', ext: 'tar.gz' }
    ];

    // نقوم بالبحث عن المنصة المختارة مرة واحدة فقط (كفاءة أكبر وأمان)
    const selectedPlatform = platforms.find(p => p.id === platform);

    return (
        <div className={styles.container}>
            <div className={styles.glassPanel}>
                <header className={styles.header}>
                    <h1>SK3D Launcher 3.2.18</h1>
                    <p>Version 3.2.18 - Released 2025.12.25</p>
                </header>

                {/* أزرار اختيار النظام */}
                <div className={styles.platformTabs}>
                    {platforms.map((p) => (
                        <button 
                            key={p.id}
                            className={platform === p.id ? styles.active : ''}
                            onClick={() => setPlatform(p.id)}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>

                <div className={styles.noticeBox}>
                    <strong>Good to know:</strong>
                    <p>If you get a warning that the app cannot be opened, click 'run anyways'. You may need to click 'more info' to see this option. This warning is entirely harmless.</p>
                </div>

                {/* زر التحميل الذكي */}
                <section className={styles.downloadSection}>
                    <div className={styles.btnGroup}>
                        {selectedPlatform && (
                            <a 
                                href={`/files/sk3d-${platform}-installer.${selectedPlatform.ext}`} 
                                className={styles.primaryBtn}
                                download={`sk3d-launcher-${platform}.${selectedPlatform.ext}`}
                            >
                                Download for {selectedPlatform.label}
                            </a>
                        )}
                        <span>or</span>
                        <a href="/app.jar" className={styles.secondaryBtn}>Download .jar</a>
                    </div>
                    <p className={styles.subtext}>Portable, requires Java 21</p>
                </section>

                <section className={styles.requirements}>
                    <p><FaRocket /> Launcher requires <strong>Java 21</strong> to work properly.</p>
                    <p>We recommend using <a href="https://adoptium.net/" target="_blank" rel="noreferrer">Temurin Java 21 LTS</a>.</p>
                </section>

                <footer className={styles.footerLinks}>
                    <a href="/changelog">Read changelog</a>
                    <a href="/known-issues">Known issues</a>
                    <a href="/report-bug">Report bug</a>
                </footer>
            </div>
        </div>
    );
}

export default DownloadPage;