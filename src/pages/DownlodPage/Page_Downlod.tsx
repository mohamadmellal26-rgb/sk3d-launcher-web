import { useState, useEffect } from 'react';
import styles from './Page_Downlod.module.css';

interface Platform {
    id: string;
    label: string;
    ext: string;
}

function DownloadPage() {
    const [platform, setPlatform] = useState<string>('windows');
    const [platforms, setPlatforms] = useState<Platform[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/platforms')
            .then(res => res.json())
            .then(data => setPlatforms(data))
            .catch(err => console.error("Error fetching platforms:", err));
    }, []);

    const selectedPlatform = platforms.find(p => p.id === platform) || { id: 'windows', label: 'Windows', ext: 'exe' };

    return (
        <div className={styles.container}>
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

            <section className={styles.downloadSection}>
                {/* تم تحديث الرابط ليتوافق مع السيرفر الجديد. 
                   خاصية 'download' هنا تعمل الآن بشكل مثالي لأن السيرفر 
                   يرسل Header باسم 'Content-Disposition: attachment'
                */}
                <a 
                    href={`http://localhost:8080/download/track/${platform}`}
                    download={`${platform}_installer.${selectedPlatform.ext}`}
                    className={styles.primaryBtn}
                >
                    Download for {selectedPlatform.label}
                </a>
            </section>
        </div>
    );
}

export default DownloadPage;